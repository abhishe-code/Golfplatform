import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import "./db.js";

const app = express();

// ✅ FINAL CORS FIX
app.use(cors({
  origin: true, // allow all origins dynamically
  credentials: true
}));

app.use(express.json());

// ✅ Handle preflight (VERY IMPORTANT)
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Backend working");
});

// routes
import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";

app.use("/api", authRoutes);
app.use("/api", scoreRoutes);
app.use("/api", drawRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
