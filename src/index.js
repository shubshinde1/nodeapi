import env from "dotenv";
import express from "express";

env.config();

const app = express();

app.get("/", (req, res) => {
  console.log("new req");
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on ${process.env.PORT}`);
});
