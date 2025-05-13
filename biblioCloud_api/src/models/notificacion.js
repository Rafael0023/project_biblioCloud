const NotificacionSchema = mongoose.Schema({
    usuario: { 
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
