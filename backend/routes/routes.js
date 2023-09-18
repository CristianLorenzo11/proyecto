const express = require('express')
const router= express()

// la conexion con la base de datos
const mysqlConexion = require('../database/bd');
const bodyParser = require('body-parser');

router.get('/',(req, res)=> {
    res.send ("esta es la ruta de inicio  ")
})





/* router.get('/producto1',(req, res)=> {
    mysqlConexion.query( "select *from producto",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
}); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// listar los productos en formato json
router.get('/producto',(req, res)=> {
    mysqlConexion.query( 
        "select p.id_producto, p.nombre_producto as nombre, p.cantidad, pr.nombre_proveedor as proveedor,m.nombre_marca as marca, u.ubicacion , tp.tipo_de_producto from producto p left join proveedor pr on p.id_proveedor = pr.idproveedor left join  marca m on p.id_marca= m.id_marca  left join ubicacion u on p.id_ubicacion= u.id_ubicacion left join tipo_producto tp on p.id_tipo_producto= tp.id_tipo_producto",(error,registro)=>{
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PROVEEDORES 
//end point para ver los proveedores
router.get('/proveedor',(req, res)=> {
    mysqlConexion.query(  "select * FROM proveedor ",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
});

//endpoint para selecionar proveedor por id
router.get("/proveedor/:idproveedor",(req, res)=> {
    const {idproveedor} = req.params
    mysqlConexion.query( "select* from proveedor WHERE idproveedor = ? ",[idproveedor],(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
} })});


// endpoint para Insert proveedores
router.post("/proveedor", bodyParser.json(), (req, res)=>{
    const{nombre_proveedor, estado }= req.body
    mysqlConexion.query( "INSERT INTO proveedor (nombre_proveedor, estado) VALUES (?,?)",[nombre_proveedor,estado],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("se cargo correctamente los datos del proveedor")
        } })
}
) 

//endpoint para editar proveedores 

router.put("/proveedor/:idproveedor", bodyParser.json(), (req, res)=>{
    
    const{nombre_proveedor }= req.body
    const {idproveedor} = req.params
    mysqlConexion.query( "UPDATE proveedor SET  nombre_proveedor=? WHERE idproveedor =? ",[nombre_proveedor, idproveedor],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("la edicion del registro  " +idproveedor+ " se realizo correctamente ")
        } })
    })


// endpoint para dar de baja  un proveedor
router.delete("/proveedor/:idproveedor", bodyParser.json(), (req, res)=>{

    const {idproveedor} = req.params
    mysqlConexion.queryuery( "UPDATE proveedor SET  estado='B' WHERE idproveedor =? ",[ idproveedor],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("la edicion del registro  " +idproveedor+ " se realizo correctamente ")
        } })
    })
//// para dar de alta a un proveedor 
    router.delete("/altaproveedor/:idproveedor", bodyParser.json(), (req, res)=>{

        const {idproveedor} = req.params
        mysqlConexion.query( "UPDATE proveedor SET  estado='A' WHERE idproveedor =? ",[ idproveedor],(error,registro)=>{
            if(error){
                console.log("el error es",error)
            }
            else{
                res.send("la edicion del registro  " +idproveedor+ " se realizo correctamente ")
            } })
        })
    


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MARCAS
//end point para ver las marcas
router.get('/marca',(req, res)=> {
    mysqlConexion.query(  "select * FROM marca ",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
});

//endpoint para selecionar marca por id
router.get("/marca/:id_marca",(req, res)=> {
    const {id_marca} = req.params
    mysqlConexion.query( "select* from marca WHERE id_marca = ? ",[id_marca],(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
} })});


// endpoint para Insert marca
router.post("/marca", bodyParser.json(), (req, res)=>{
    const{nombre_marca }= req.body
    mysqlConexion.query( "INSERT INTO marca (nombre_marca) VALUES (?)",[nombre_marca],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("se cargo correctamente los datos de la marca")
        } })
}
) 

//endpoint para editar marca

router.put("/marca/:id_marca", bodyParser.json(), (req, res)=>{
    
    const{nombre_marca }= req.body
    const {id_marca} = req.params
    mysqlConexion.query( "UPDATE marca SET nombre_marca =? WHERE id_marca =? ",[nombre_marca, id_marca],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("la edicion del registro  " +id_marca+ " se realizo correctamente ")
        } })
    })


// endpoint para eliminar una marca
router.delete("/marca/:id_marca", bodyParser.json(), (req, res)=>{
    
    const {id_marca} = req.params
    mysqlConexion.query( "DELETE FROM marca WHERE id_marca =? ",[id_marca],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("el registro  " +id_marca+ " se elimino correctamente ")
        } })
}
) 

////////////////////////////////////////////////////////////////////////////////////////////
// tipo de producto 
//end point para ver los tipos de productos
router.get('/tipo_producto',(req, res)=> {
    mysqlConexion.query(  "select * FROM tipo_producto ",(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
}
 })
});

//endpoint para selecionar un tipo de producto  por id
router.get("/tipo_producto/:id_tipo_producto",(req, res)=> {
    const {id_tipo_producto} = req.params
    mysqlConexion.query( "select* from tipo_producto WHERE id_tipo_producto = ? ",[id_tipo_producto],(error,registro)=>{
if(error){
    console.log("el error es",error)
}
else{
    res.json(registro)
} })});


// endpoint para Insert un tipo de producto
router.post("/tipo_producto", bodyParser.json(), (req, res)=>{
    const{tipo_de_producto}= req.body
    mysqlConexion.query( "INSERT INTO tipo_producto (tipo_de_producto) VALUES (?)",[tipo_de_producto],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("se cargo correctamente los datos del tipo de producto")
        } })
}
) 
//endpoint para editar  tipo de producto

router.put("/tipo_producto/:id_tipo_producto", bodyParser.json(), (req, res)=>{
    
    const{tipo_de_producto }= req.body
    const {id_tipo_producto} = req.params
    mysqlConexion.query( "UPDATE tipo_producto SET tipo_de_producto =? WHERE id_tipo_producto =? ",[tipo_de_producto, id_tipo_producto],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("la edicion del registro  " +id_tipo_producto+ " se realizo correctamente ")
        } })
    })


// endpoint para eliminar una tipo de producto
router.delete("/tipo_producto/:id_tipo_producto", bodyParser.json(), (req, res)=>{
    
    const {id_tipo_producto} = req.params
    mysqlConexion.query( "DELETE FROM tipo_producto WHERE id_tipo_producto =? ",[id_tipo_producto],(error,registro)=>{
        if(error){
            console.log("el error es",error)
        }
        else{
            res.send("el registro  " +id_tipo_producto+ " se elimino correctamente ")
        } })
}
) 



module.exports= router; //para exportar la ruta