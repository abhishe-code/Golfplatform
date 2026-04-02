import mongoose from "mongoose";

const MONOGO_URL="mongodb+srv://docols:Ankit0733@cluster0.eh7wg0u.mongodb.net/?appName=Cluster0"
mongoose.connect(MONOGO_URL)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("DB Error:", err));
