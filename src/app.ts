import express from "express";
import router from "./app/route";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/", router);

export default app;
