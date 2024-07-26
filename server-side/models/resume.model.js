const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    address: String,
  },
  workExperience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  skills: [String],
});

module.exports = mongoose.model("Resume", resumeSchema);
