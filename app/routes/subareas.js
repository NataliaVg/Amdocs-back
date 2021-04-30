const express = require("express")
const router = express.Router()
const subareas = require("../controller/subareas.controller");

router.post("/", subareas.create);

router.delete("/", subareas.deleteById);

router.put("/", subareas.update);

router.put("/updateEmpleado", subareas.updateEmpleado);

module.exports = router