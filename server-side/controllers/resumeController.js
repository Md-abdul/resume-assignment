const Resume = require('../models/resume.model');
const createResume = async (req, res) => {
  try {
    const resume = new Resume({ ...req.body});
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create resume' });
  }
};

const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update resume' });
  }
};

const deleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndDelete(req.params.id);
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete resume' });
  }
};

const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resumes' });
  }
};

module.exports = {
  createResume,
  updateResume,
  deleteResume,
  getResumes,
};
