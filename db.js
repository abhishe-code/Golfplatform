import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://docols:Ankit0733@cluster0.eh7wg0u.mongodb.net/golfDB?retryWrites=true&w=majority"


console.log("ENV VALUE:", MONGO_URI);

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("DB Error:", err));
