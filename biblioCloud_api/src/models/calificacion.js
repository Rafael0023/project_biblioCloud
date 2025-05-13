const CalificacionSchema = mongoose.Schema({
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Usuario", 
        required: true 
    },
    libro: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Libro", 
        required: true 
    },
    puntuacion: {
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    },
    comentario: { 
        type: String 
    }
}, { timestamps: true });

module.exports = mongoose.model("Calificacion", CalificacionSchema);
