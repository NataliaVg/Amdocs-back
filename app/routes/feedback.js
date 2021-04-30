const express = require("express")
const router = express.Router()
const feedback = require("../controller/feedback.controller");

router.post("/", feedback.create);

router.get("/", feedback.findBySubareaID);

router.get("/user", feedback.findByUserId);

module.exports = router