const express = require('express')
const router= express()

// la conexion con la base de datos
const mysqlConexion = require('../database/bd');
const bodyParser = require('body-parser');




router.get('/',(req, res)=> {
    res.send ("esta es la ruta de inicio  ")
})

/* router.get('/producto1',(req, res)=> {
    mysqlConeccion.query( "select *from producto",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
}); */

// listar los productos en formato json
router.get('/producto',(req, res)=> {
    mysqlConexion.query( 
        "select p.nombre_producto as nombre, p.cantidad, pr.nombre_proveedor as proveedor,m.nombre_marca as marca, u.ubicacion , tp.tipo_de_producto from producto p left join proveedor pr on p.id_proveedor = pr.idproveedor left join  marca m on p.id_marca= m.id_marca  left join ubicacion u on p.id_ubicacion= u.id_ubicacion left join tipo_producto tp on p.id_tipo_producto= tp.id_tipo_producto",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
});

//endpoint para selecionar producto por id
router.get("/producto/:id_producto",(req, res)=> {
    const {id_producto} = req.params
    mysqlConexion.query( "select* from producto WHERE id_producto = ? ",[id_producto],(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
} })});


// end point para post productos a la base de datos
 /*router.post("/producto", bodyParser.json(), (req, res)=>{
    const{nombre_producto, id_marca, id_presentacion,id_proveedor,id_tipo_producto, id_ubicacion,cantidad }= req.body
    console.log("datos", req.body)
   
    res.send("se cargo correctamente")
}
) */

// endpoint para Insert de productos
router.post("/producto", bodyParser.json(), (req, res)=>{
    const{nombre_producto, id_marca, id_presentacion,id_proveedor,id_tipo_producto, id_ubicacion,cantidad }= req.body
    mysqlConexion.query( "INSERT INTO producto (nombre_producto, id_marca, id_presentacion, id_proveedor, id_tipo_producto, id_ubicacion, cantidad) VALUES (?, ?, ?, ?, ?, ?, ?)",[nombre_producto, id_marca, id_presentacion,id_proveedor,id_tipo_producto, id_ubicacion,cantidad],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("se cargo correctamente los datos")
        } })
}
) 
//endpoint para editar productos 

router.put("/producto/:id_producto", bodyParser.json(), (req, res)=>{
    
    const{nombre_producto, id_marca, id_presentacion,id_proveedor,id_tipo_producto, id_ubicacion,cantidad }= req.body
    const {id_producto} = req.params
    mysqlConexion.query( "UPDATE producto SET nombre_producto =?, id_marca =?, id_presentacion =?, id_proveedor =?, id_tipo_producto =?, id_ubicacion=?, cantidad =? WHERE id_producto =? ",[nombre_producto, id_marca, id_presentacion,id_proveedor,id_tipo_producto, id_ubicacion,cantidad, id_producto],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("la edicion del registro  " +id_producto+ " se realizo correctamente ")
        } })
}
) 
// endpoint para eliminar un producto
router.delete("/producto/:id_producto", bodyParser.json(), (req, res)=>{
    
    const {id_producto} = req.params
    mysqlConexion.query( "DELETE FROM producto WHERE id_producto =? ",[id_producto],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("el registro  " +id_producto+ " se elimino correctamente ")
        } })
}
) 




module.exports= router; //para exportar la ruta