const db = require("../models");
const Area = db.areas;

exports.create = (req, res) => {
    if (!req.body.area_de_feedback) {
        res.status(400).send({ message: "Name can not be empty" });
        return;
    }

    // Send feedback
    const area = new Area({
      id_area_de_feedback: req.body.id_area_de_feedback,
      area_de_feedback: req.body.area_de_feedback,
    });

    // Save feedback in the database
    area.save(area).then(data => {
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
    const id = req.body.id_area_de_feedback;
    Area.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Area with id=${id}. Maybe Area was not found!`
          });
        } else {
          res.send({
            message: "Area was deleted successfully!"
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
    const id = req.body.id_area_de_feedback;
    const name = req.body.area_de_feedback;
    Area.findByIdAndUpdate(id, { area_de_feedback: name }, {useFindAndModify:false})
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update area with id=${id}. Maybe Area was not found!`
          });
        } else {
          res.send({
            message: "Area was updated successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not update area with id=" + id
        });
      });
}
