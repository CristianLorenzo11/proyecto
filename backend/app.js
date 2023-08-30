const express = require('express')
const app= express()
const port= 3000

const morgan = require ('morgan')

app.set('puerto' , 3000);

app.use(morgan('dev'))

app.get('/',(req, res)=> {
    res.status (200).send ("esto esta funcionando bien :) ")
})


app.listen(port, ()=>{
    console.log("el server esta funcionando")
}

)
const mysqlConnect = require('./database/bd')
