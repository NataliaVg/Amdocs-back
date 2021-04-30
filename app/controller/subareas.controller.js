const db = require("../models");
const Subarea = db.subareas;

exports.create = (req, res) => {
    if (!req.body.subarea) {
        res.status(400).send({ message: "Name can not be empty" });
        return;
    }

    // Send feedback
    const subarea = new Subarea({
      id_subarea_de_feedback: req.body.id_subarea_de_feedback,
      subarea: req.body.subarea,
      id_empleado: null,
      id_area_de_feedback: req.body.id_area_de_feedback
    });

    // Save feedback in the database
    subarea.save(subarea).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error: area not saved."
      });
    });
};

exports.deleteById = (req, res) => {
    const id = req.body.id_subarea_de_feedback;
    Subarea.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete subarea with id=${id}. Maybe subarea was not found!`
          });
        } else {
          res.send({
            message: "Subrea was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete area with id=" + id
        });
      });
}

exports.update = (req, res) => {
    const id = req.body.id_subarea_de_feedback;
    const name = req.body.subarea;
    const area = req.body.id_area_de_feedback;
    Subarea.findByIdAndUpdate(id, { subarea: name,  id_area_de_feedback: area}, {useFindAndModify:false})
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update subarea with id=${id}. Maybe subarea was not found!`
          });
        } else {
          res.send({
            message: "Subarea was updated successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not update subarea with id=" + id
        });
      });
}

exports.updateEmpleado = (req, res) => {
  const id = req.body.id_subarea_de_feedback;
  Subarea.findByIdAndUpdate(id, { id_empleado: req.body.id_empleado}, {useFindAndModify:false})
  .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update subarea with id=${id}. Maybe subarea was not found!`
        });
      } else {
        res.send({
          message: "Subarea was updated successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update subarea with id=" + id
      });
    });
}