const express = require("express");
const router = express.Router();
const usuarioSchema = require("../models/usuario");
const Usuario = require("../models/usuario")

// consultar usuarios registrados 

router.get("/usuario", (req, res) => {
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un usuario por su id

router.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//modificar un usuario por su id

router.put("/usuario/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contrasena, rol } = req.body;

  try {
    const camposActualizados = {
      nombre,
      correo,
      rol
    };

    if (contrasena && contrasena.trim() !== "") {
     const tempUsuario = new Usuario();
     const contrasenaEncriptada = await tempUsuario.encryptContrasena(contrasena);
      camposActualizados.contrasena = contrasenaEncriptada;
    }

    const resultado = await usuarioSchema.updateOne(
      { _id: id },
      { $set: camposActualizados }
    );

    res.json(resultado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
});
// eliminar un usuaio existente
router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        })
});
module.exports = router;