const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
const usuario = require("../models/usuario");




// Crear un nuevo Usuario

router.post('/signup', async (req, res) => {
    const { nombre, correo, contrasena, rol } = req.body;
    const usuario = new usuarioSchema({
        nombre,
        correo,
        contrasena,
        rol
    });
    usuario.contrasena = await usuario.encryptContrasena(usuario.contrasena);
    await usuario.save(); //save es un método de mongoose para guardar datos en MongoDB 
    //res.json(administrador);

    res.json({
        usuario
    });


});


//inicio de sesión
router.post("/login", async (req, res) => {

    // validaciones
    const { error } = usuarioSchema.validate(req.body.correo, req.body.contrasena);
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const usuario = await usuarioSchema.findOne({ correo: req.body.correo });
    //validando si no se encuentra
    if (!usuario) return res.status(400).json({ error: "Usuario no encontrado" });
    //Transformando la contraseña a su valor original para 
    //compararla con la clave que se ingresa en el inicio de sesión
    const contrasenaValida = await bcrypt.compare(req.body.contrasena, usuario.contrasena);
    if (!contrasenaValida)
        return res.status(400).json({ error: "Clave no válida" });
    const token = jwt.sign({ id: usuario._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24, //un día en segundos tiempo valido para el  token
    });
    res.json({


        data: "Bienvenido(a)",
        auth: true,
        token,

    });

});

module.exports = router;

