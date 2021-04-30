const dbConfig = require('../config/db.config.js');

const mongoose = require("mongoose");
mongoose.pluralize(null);
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.feedback = require("./feedback.model.js")(mongoose);
db.usuario = require("./usuario.model.js")(mongoose);
db.respuesta = require("./respuesta.model.js")(mongoose);
db.areas = require("./areas.model.js")(mongoose);
db.subareas = require("./subareas.model.js")(mongoose);

module.exports = db;