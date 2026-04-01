import Score from "../models/Score.js";

export const addScore = async (req, res) => {
  const { userId, value } = req.body;

  const scores = await Score.find({ userId }).sort({ date: 1 });

  if (scores.length >= 5) {
    await Score.findByIdAndDelete(scores[0]._id); // delete oldest
  }

  const newScore = await Score.create({ userId, value });

  res.json(newScore);
};

export const getScores = async (req, res) => {
  const { userId } = req.query;

  const scores = await Score.find({ userId }).sort({ date: -1 });

  res.json(scores);
};
