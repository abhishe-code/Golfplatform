import dotenv from "dotenv";

// 👇 VERY IMPORTANT (force load .env correctly)
dotenv.config({ path: "./.env" });

import "./db.js";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.use("/api", authRoutes);
app.use("/api", scoreRoutes);
app.use("/api", drawRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
