import http from "http";
import { parse } from "url";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const handleRequest = async (req, res, pathname) => {
  try {
    if (pathname === "/") {
      const [htmlData, postsData] = await Promise.all([
        readFile(path.join(__dirname, "index.html"), "utf-8"),
        readFile(path.join(__dirname, "posts.json"), "utf-8"),
      ]);

      const posts = JSON.parse(postsData).posts;
      let postsListHTML = "<ul>";

      posts.forEach((post, index) => {
        postsListHTML += `<li><a href="/posts/${index}">${post.title}</a></li>`;
      });
      postsListHTML += "</ul>";
      const responseHTML = htmlData.replace("{{postsList}}", postsListHTML);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(responseHTML);
    } else if (pathname === "/editor") {
      const htmlData = await readFile(
        path.join(__dirname, "editor.html"),
        "utf-8"
      );
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(htmlData);
    } else if (pathname === "/editor/posts") {
      res.statusCode = 200;
      res.end("This is the editor posts page");
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
