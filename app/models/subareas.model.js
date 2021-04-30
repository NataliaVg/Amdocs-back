module.exports = mongoose => {
    const SubareasFeedback = mongoose.model(
      "SubareasFeedback",
      mongoose.Schema({
        id_subarea_de_feedback: String,
        subarea: String,
        id_empleado: String,
        id_area_de_feedback: String
        }
      )
    );
    return SubareasFeedback;
};