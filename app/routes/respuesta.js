const express = require("express")
const router = express.Router()
const respuesta = require("../controller/respuesta.controller");

router.post("/", respuesta.create);

router.get("/", respuesta.findByUserId);


module.exports = router