const mongoose = require("mongoose");
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
    imagen:{
        type : String 
    },
    popularidad: { 
        type: Number, default: 0 
    },
   
}, { timestamps: true });

module.exports = mongoose.model("Libro", LibroSchema);
