const express = require('express')
const app= express()
const port= 3000

const morgan = require ('morgan')
const bodyParser = require ('body-parser')
app.set('puerto' , 3000);

app.use(morgan('dev'))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});







app.listen(port, ()=>{
    console.log("el server esta funcionando") //avisamos que el servidor esta funcionando bien 
}
)
app.use(require('./routes/routes')); // con esto requirimos las rutas
app.use(bodyParser.json)

