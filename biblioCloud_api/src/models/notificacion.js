const mongoose = require("mongoose");
const NotificacionSchema = mongoose.Schema({
    usuarioEmisor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usuario", 
        required: true 
    },
      usuarioReceptor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usuario",
        required: true 
    },
    mensaje: { 
        type: String, 
        required: true 
    },
    leido: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true });

module.exports = mongoose.model("Notificacion", NotificacionSchema);
