const db = require("../models");
const Respuesta = db.respuesta;

exports.create = (req, res) => {
    if (!req.body.mensaje) {
        res.status(400).send({ message: "Message can not be empty" });
        return;
    }

    // Send reply
    const respuesta = new Respuesta({
        id_feedback: req.body.id_feedback,
        id_subarea: req.body.id_subarea,
        id_empleado: req.body.id_empleado,
        mensaje: req.body.mensaje,
        estatus: req.body.estatus
    });

    // Save reply in the database
    respuesta.save(respuesta).then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error: respuesta not saved."
        });
    });
  };

exports.findByUserId = (req, res) => {
    Respuesta.find({ id_empleado: req.body.id_empleado}, function(err, respuesta) {
        res.send(respuesta)
        })
};