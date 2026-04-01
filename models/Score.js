import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  userId: String,
  value: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Score", scoreSchema);
