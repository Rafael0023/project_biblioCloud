const LibroSchema = mongoose.Schema({
    titulo: { 
        type: String, 
        required: true 
    },
    autor: { 
        type: String, 
        required: true 
    },
    isbn: { 
        type: String, 
        required: true, 
        unique: true },
    editorial: { 
        type: String 
    },
    categoria: { 
        type: String 
    },
    popularidad: { 
        type: Number, default: 0 
    },
    accesoExclusivo: { 
        type: Boolean, default: false 
    }, // Para profesores
}, { timestamps: true });

module.exports = mongoose.model("Libro", LibroSchema);
