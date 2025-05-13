const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    nombre: { 
        type: String, 
        required: true
     },
    correo: { 
        type: String, 
        required: true, 
        unique: true },
    contrasena: { 
        type: String, 
        required: true 
    },
    rol: { 
        type: String, 
        required: true, 
        enum: ['usuario', 'profesor', 'administrador'] 
    },
    libros: [{ type: mongoose.Schema.Types.ObjectId, ref: "libro" }]

}, 
{ timestamps: true });

UsuarioSchema.methods.encryptContrasena = async (contrasena) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contrasena, salt);
}


module.exports = mongoose.model("Usuario", UsuarioSchema);
