const express = require('express')
const router= express()

const mysqlConnect = require('../database/bd'); // la conexion con la base de datos
const mysqlConeccion = require('../database/bd');




router.get('/',(req, res)=> {
    res.send ("esta es la ruta de inicio  ")
})
// listar los productos en formato json
router.get('/producto',(req, res)=> {
    mysqlConeccion.query( 
        "select p.nombre_producto as nombre, p.cantidad, pr.nombre_proveedor as proveedor,m.nombre_marca as marca, u.ubicacion , tp.tipo_de_producto from producto p left join proveedor pr on p.id_proveedor = pr.idproveedor left join  marca m on p.id_marca= m.id_marca  left join ubicacion u on p.id_ubicacion= u.id_ubicacion left join tipo_producto tp on p.id_tipo_producto= tp.id_tipo_producto",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
});

//selecionar producto por id
router.get("/producto/:id_producto",(req, res)=> {
    const {id_producto} = req.params
    mysqlConeccion.query( "select* from producto WHERE id_producto = ? ",[id_producto],(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
} })});






module.exports= router; //para exportar la ruta