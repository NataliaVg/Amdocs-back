const db = require("../models");
const Usuario = db.usuario;

exports.create = (req, res) => {
    Usuario.find({ email:req.body.email}, function(err, usuario) {
        console.log(usuario[0]);

        if (usuario[0].password == req.body.password){
            res.send(usuario[0].id_empleado);
        }else{
            res.status(400).send({ message: "Error: wrong password or email" });
            return;
        }
    });
}

exports.updateUserByID = (req, res) => {
    const id = req.body.id_empleado;
    const rol_empleado = req.body.rol;
    Usuario.findByIdAndUpdate(id, { rol: rol_empleado }, {useFindAndModify:false})
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update area with id=${id}. Maybe user was not found!`
          });
        } else {
          res.send({
            message: "User was updated successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not update user with id=" + id
        });
      });
}

exports.findAll = (req, res) => {
    Usuario.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });

};