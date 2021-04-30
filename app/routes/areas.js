const express = require("express")
const router = express.Router()
const areas = require("../controller/areas.controller");

router.post("/", areas.create);

router.delete("/", areas.deleteById);

router.put("/", areas.update);

module.exports = router