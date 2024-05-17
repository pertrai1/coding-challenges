import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Load balancer is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
