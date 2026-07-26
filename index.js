import express from "express";
import cors from "cors";
import summarizeRoute from "./routes/summarizeRoute.js";
import dotenv from"dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/summarize", summarizeRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Summarizer API is running"
  });
});

app.listen(port,()=>console.log(`server is running on port:${port}`));


