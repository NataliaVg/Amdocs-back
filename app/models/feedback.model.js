module.exports = mongoose => {
    const Feedback = mongoose.model(
      "Feedback",
      mongoose.Schema(
        {
            id_empleado: String,
            id_subarea_de_feedback: String,
            tipo_de_feedback: String,
            mensaje: String,
            anonimo: Boolean
        },
        { timestamps: true }
      )
    );
    return Feedback;
};