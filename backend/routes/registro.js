const express = require('express');
const router = express();
const bcrypt = require('bcrypt');

// Conexión a la base de datos
const mysqlConexion = require('../database/bd');
const bodyParser = require('body-parser');

// ENDPOINT PARA VER UN USUARIO
router.get('/usuario', (req, res) => {
    mysqlConexion.query("SELECT * FROM usuario", (error, registro) => {
        if (error) {
            console.log("el error es", error);
        } else {
            res.json(registro);
        }
    });
});

// ENDPOINT PARA REGISTRAR UN USUARIO
router.post("/registro", bodyParser.json(), (req, res) => {

    const { nombre, apellido, dni, user, pass, correo, securityQuestion, securityAnswer } = req.body;
    let hash = bcrypt.hashSync(pass, 10);

    if (!dni) {
        return res.json({
            status: false,
            mensaje: "EL DNI ES UN CAMPO OBLIGATORIO "
        });
    }
    if (!nombre) {
        return res.json({
            status: false,
            mensaje: "EL NOMBRE ES UN CAMPO OBLIGATORIO "
        });
    }
    if (!apellido) {
        return res.json({
            status: false,
            mensaje: "EL APELLIDO ES UN CAMPO OBLIGATORIO "
        });
    }

    mysqlConexion.query("SELECT * FROM  usuario WHERE user=?", [user], (error, usuario) => {
        if (error) {
            console.log("el error es", error);
        } else {
            if (usuario.length > 0) {
                res.json({
                    status: false,
                    mensaje: "EL USUARIO " + user + " YA EXISTE "
                });
            } else {
                mysqlConexion.query("INSERT INTO usuario (nombre, apellido, dni, user, pass, correo, securityQuestion, securityAnswer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [nombre, apellido, dni, user, hash, correo, securityQuestion, securityAnswer], (error, registro) => {
                    if (error) {
                        console.log("ERROR EN EL REGISTRO ", error);
                    } else {
                        res.json({
                            status: true,
                            mensaje: "EL USUARIO " + user + " SE CARGO CORRECTAMENTE "
                        });
                    }
                });
            }
        }
    });
});

module.exports = router; // Para exportar la ruta
