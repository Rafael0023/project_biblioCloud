const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const usuarioRoutes = require("./routes/usuarioRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const libroRoutes = require("./routes/libroRoutes");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use("/api", usuarioRoutes);
app.use("/api", authenticationRoutes);
app.use("/api", libroRoutes);

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
