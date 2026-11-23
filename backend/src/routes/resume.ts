const express = require("express");
const router = express.Router();
const {upload} = require("../controllers/resumeController");
const {uploadResume} = require('../middleware/resumeMiddleware')

router.post("/upload",uploadResume, upload);

export default router;