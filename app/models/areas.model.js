module.exports = mongoose => {
    const AreasFeedback = mongoose.model(
      "AreasFeedback",
      mongoose.Schema(
        {
            id_area_de_feedback: String,
            area_de_feedback: String,
        }
      )
    );
    return AreasFeedback;
};