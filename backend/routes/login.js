const express = require('express')
const router= express()
const bycript = require ('bcrypt')

// la conexion con la base de datos
const mysqlConexion = require('../database/bd');
const bodyParser = require('body-parser');


router.post("/login",bodyParser.json(), (req, res)=>{
    const{user,pass} =req.body
if(!user){
    res.json({
        status: false,
        mensaje: "EL USUARIO ES OBLIGATORIO "

    }) 

}
if(!pass){
    res.json({
        status: false,
        mensaje: "EL PASS ES OBLIGATORIO "

    }) 

}
mysqlConexion.query( "SELECT * FROM  usuario WHERE user=?",[user],(error,usuario)=>{
       
    if(error){
        console.log("el error es",error)
    }
    else{
        if(usuario.length>0){
            const comparacion = bycript.compareSync(pass, usuario[0].pass)
        if(comparacion){
            res.json({
                status: true

            })

        }  
        else{ res.json({
            status: false,
            mensaje: "la contraseña es incorrecta "

        })

        }
        
        } 
            
            else {
                res.json({
                    status: false,
                    mensaje: "EL USUARIO NO EXISTE "
    
                })
            }
        }
        })




})


module.exports= router; //para exportar la ruta