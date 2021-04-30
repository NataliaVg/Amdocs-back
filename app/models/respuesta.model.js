module.exports = mongoose => {
    const Respuesta = mongoose.model(
      "Respuesta",
      mongoose.Schema(
        {
            id_feedback: String,
            id_subarea: String,
            id_empleado: String,
            mensaje: String,
            estatus: String,
        },
        { timestamps: true }
      )
    );
    return Respuesta;
};