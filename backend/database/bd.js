const mysql = require('mysql');

const mysqlConeccion= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'productos_deportivos'
});

mysqlConeccion.connect(function(err){
    if(err){
        console.log('Mi error de conexion es: ', err)
        return;
    }else{
        console.log('Mi coneccion a la base de datos  se realizo correctamente')
    }
})

module.exports=mysqlConeccion;