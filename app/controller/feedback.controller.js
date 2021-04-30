const db = require("../models");
const Feedback = db.feedback;

exports.create = (req, res) => {
    if (!req.body.mensaje) {
        res.status(400).send({ message: "Message can not be empty" });
        return;
    }

    // Send feedback
    const feedback = new Feedback({
      id_empleado: req.body.id_empleado,
      id_subarea_de_feedback:req.body.id_subarea_de_feedback,
      tipo_de_feedback:req.body.tipo_de_feedback,
      mensaje:req.body.mensaje,
      anonimo:req.body.anonimo
    });

    // Save feedback in the database
    feedback.save(feedback).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error: feedback not saved."
      });
    });
};

exports.findBySubareaID = (req, res) => {
  Feedback.find({ id_subarea_de_feedback: req.body.id_subarea}, function(err, feedback) {
    res.send(feedback)
  })
};

exports.findByUserId = (req, res) => {
  Feedback.find({ id_empleado: req.body.id_empleado}, function(err, feedback) {
      res.send(feedback)
      })
};