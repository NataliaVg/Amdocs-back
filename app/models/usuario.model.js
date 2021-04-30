module.exports = mongoose => {
    const Usuario = mongoose.model(
      "Usuario",
      mongoose.Schema(
        {
            id_empleado: String,
            nombre: String,
            apellido_p: String,
            apellido_m: String,
            rol: String,
            email: String,
            password: String
        }
      )
    );
    return Usuario;
};