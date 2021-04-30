const express = require("express")
const router = express.Router()
const usuario = require("../controller/usuario.controller");

router.post("/", usuario.create);

router.get("/", usuario.findAll);

router.put("/", usuario.updateUserByID)

module.exports = router