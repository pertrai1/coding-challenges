import http from "http";
import { parse } from "url";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import bodyParser from "body-parser";
import { existsSync, mkdirSync } from "fs";

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parsePostData = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      resolve(new URLSearchParams(body));
    });
    req.on("error", (err) => {
      reject(err);
    });
  });
};

const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.setHeader("WWW-Authenticate", "Basic");
    res.statusCode = 401;
    res.end("Unauthorized");
    return;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  if (username === "admin" && password === "admin") {
    next();
  } else {
    res.setHeader("WWW-Authenticate", "Basic");
    res.statusCode = 401;
    res.end("Unauthorized");
  }
};

const requestHandler = (req, res) => {
  const parsedUrl = parse(req.url, true);
  const pathname = parsedUrl.pathname;

  const next = () => {
    handleRequest(req, res, pathname);
  };

  if (pathname.startsWith("/editor")) {
    basicAuth(req, res, next);
  } else {
    handleRequest(req, res, pathname);
  }
};

const listingOfBlogPosts = (htmlData, postsData) => {
  const posts = JSON.parse(postsData).posts;
  let postsListHTML = "<ul>";

  posts.forEach((post, index) => {
    postsListHTML += `<li><a href="/posts/${index}">${post.title}</a></li>`;
  });
  postsListHTML += "</ul>";
  return htmlData.replace("{{postsList}}", postsListHTML);
};

const handleRequest = async (req, res, pathname) => {
  try {
    if (pathname === "/") {
      const [htmlData, postsData] = await Promise.all([
        readFile(path.join(__dirname, "index.html"), "utf-8"),
        readFile(path.join(__dirname, "posts.json"), "utf-8"),
      ]);
      const responseHTML = listingOfBlogPosts(htmlData, postsData);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(responseHTML);
    } else if (pathname === "/editor") {
      const [htmlData, postsData] = await Promise.all([
        readFile(path.join(__dirname, "editor.html"), "utf-8"),
        readFile(path.join(__dirname, "posts.json"), "utf-8"),
      ]);
      const responseHTML = listingOfBlogPosts(htmlData, postsData);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(responseHTML);
    } else if (pathname === "/editor/posts" && req.method === "GET") {
      const htmlData = await readFile(
        path.join(__dirname, "post.html"),
        "utf-8"
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(htmlData);
    } else if (pathname === "/editor/posts" && req.method === "POST") {
      const formData = await parsePostData(req);
      const title = formData.get("title");
      const summary = formData.get("summary");
      const postContent = formData.get("post");
      console.log(formData.get("post"));

      const filename = `${title.toLowerCase().replace(/ /g, "-")}.md`;
      const postDir = path.join(__dirname, "posts");

      if (!existsSync(postDir)) {
        mkdirSync(postDir);
      }

      await writeFile(path.join(postDir, filename), postContent);

      const postsData = await readFile(
        path.join(__dirname, "posts.json"),
        "utf-8"
      );
      const posts = JSON.parse(postsData);

      posts.posts.push({ title, summary, file: filename });

      await writeFile(
        path.join(__dirname, "posts.json"),
        JSON.stringify(posts, null, 2)
      );

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    } else if (pathname === "posts") {
      res.statusCode = 200;
      res.end("This is the posts page");
    }
  } catch (err) {
    console.error("Something went wrong", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.error("Something went wrong", err);
  }

  console.log(`Server is listening on ${PORT}`);
});
