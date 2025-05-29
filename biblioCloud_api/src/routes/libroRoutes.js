const express = require("express");
const router = express.Router();
const LibroSchema = require("../models/libro"); // modelo importado correctamente

// Obtener todos los libros con límite opcional
router.get("/libro", (req, res) => {
    const limite = parseInt(req.query.limite) || 50; // límite por defecto: 10

    LibroSchema.find()
        .limit(limite)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


// Obtener un libro por ID
router.get("/libro/:id", (req, res) => {
    const { id } = req.params;
    LibroSchema.findById(id)
        .then((data) => {
            if (!data) return res.status(404).json({ message: "Libro no encontrado" });
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Modificar un libro por ID
router.put("/libro/:id", async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, isbn, editorial, popularidad, imagenes } = req.body;

    try {
        const libroActualizado = await LibroSchema.findByIdAndUpdate(
            id,
            {
                $set: {
                    ...(titulo && { titulo }),
                    ...(autor && { autor }),
                    ...(isbn && { isbn }),
                    ...(editorial && { editorial }),
                    ...(popularidad !== undefined && { popularidad }),
                    ...(imagenes && { imagenes }),
                },
            },
            { new: true } // Retorna el documento modificado
        );

        if (!libroActualizado) return res.status(404).json({ message: "Libro no encontrado" });

        res.json(libroActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Eliminar un libro por ID
router.delete("/libro/:id", (req, res) => {
    const { id } = req.params;
    LibroSchema.findByIdAndDelete(id)
        .then((data) => {
            if (!data) return res.status(404).json({ message: "Libro no encontrado" });
            res.json({ message: "Libro eliminado correctamente", data });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
});

module.exports = router;
