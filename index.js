import env from "dotenv";
import express from "express";
import leaveData from "./leaveData.json" assert { type: "json" };
import cors from "cors";

const data = leaveData;

env.config();

const app = express();
app.use(cors());

app.get("/api/v1", (req, res) => {
  console.log("new req");
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`App running on ${process.env.PORT}`);
});
