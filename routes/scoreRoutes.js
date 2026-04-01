import express from "express";
import { addScore, getScores } from "../controllers/scoreController.js";

const router = express.Router();

router.post("/add-score", addScore);
router.get("/get-scores", getScores);

export default router;
