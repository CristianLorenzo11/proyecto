const express = require('express')
const app= express()
const port= 3000

const morgan = require ('morgan')
const bodyParser = require ('body-parser')
app.set('puerto' , 3000);

app.use(morgan('dev'))


app.listen(port, ()=>{
    console.log("el server esta funcionando") //avisamos que el servidor esta funcionando bien 
}
)
app.use(require('./routes/routes')); // con esto requirimos las rutas
app.use(bodyParser.json)

