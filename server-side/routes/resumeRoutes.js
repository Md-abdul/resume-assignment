const express = require('express');
const { createResume, updateResume, deleteResume, getResumes } = require('../controllers/resumeController');
const router = express.Router();
// const { verifyToken } = require('../middleware/authMiddleware');

router.post('/postresume',  createResume);
router.put('/updateresume/:id',  updateResume);
router.delete('/deleteresumes/:id',  deleteResume);
router.get('/getResume',  getResumes);

module.exports = router;
