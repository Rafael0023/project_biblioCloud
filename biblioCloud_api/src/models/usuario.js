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
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("Usuario", UsuarioSchema);
