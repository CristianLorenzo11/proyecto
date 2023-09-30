const express = require('express')
const router= express()
const bycript = require ('bcrypt')

// la conexion con la base de datos
const mysqlConexion = require('../database/bd');
const bodyParser = require('body-parser');

/// ENDPOINT PARA VER UN USUARIO
router.get('/usuario',(req, res)=> {
    mysqlConexion.query(  "select * FROM usuario ",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
});

/// ENDPOINT PARA REGISTRAR UN USUARIO
router.post("/registro", bodyParser.json(), (req, res)=>{

const{nombre, apellido, dni, user, pass, correo}= req.body
let hash=bycript.hashSync(pass,10);
if(!dni){
    res.json({
        status: false,
        mensaje: "EL DNI ES UN CAMPO OBLIGATORIO "

    })
}
if(!nombre){
    res.json({
        status: false,
        mensaje: "EL NOMBRE ES UN CAMPO OBLIGATORIO "

    })
}
if(!apellido){
    res.json({
        status: false,
        mensaje: "EL APELLIDO ES UN CAMPO OBLIGATORIO "

    })
}
 mysqlConexion.query( "SELECT * FROM  usuario WHERE user=?",[user],(error,usuario)=>{
       
        if(error){
            console.log("el error es",error)
        }
        else{
            if(usuario.length>0){
                res.json({
                    status: false,
                    mensaje: "EL USUARIO "+user +" YA EXISTE "

                }) 

                
            } else{
                    mysqlConexion.query( "INSERT INTO usuario (nombre, apellido, dni, user, pass, correo) VALUES (?, ?, ?, ?, ?, ?)",[nombre, apellido, dni, user, hash, correo],(error,registro)=>{
                        if(error){
                            console.log("ERROR EN EL REGISTRO ",error)
                        }
                        else{
                            res.json({
                                status: true,
                                mensaje: "EL USUARIO "+ user +" SE CARGO CORRECTAMENTE "
            
                            }) 
            
                            
                        } })
                } 
                
            
        } }) 
}
) 

module.exports= router; //para exportar la ruta

//INSERT INTO usuario (nombre, apellido, dni, user, pass, correo) VALUES (?, ?, ?, ?, ?, ?)