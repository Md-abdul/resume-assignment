require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const PORT = 5000;

app.use(cors());
app.use(express.json());

const connect = async () => {
  try {
    const mongoURI = `mongodb+srv://mdabdulq62:nadim123@cluster0.mjympox.mongodb.net/resumebuilder?retryWrites=true&w=majority`;
    if (!mongoURI) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables."
      );
    }
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

app.use("/api/auth", userRoutes);
app.use("/api/resumes", resumeRoutes);

app.use("/", (req, res) => {
  res.json({ msg: "Welcome to Resume Builder!" });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
