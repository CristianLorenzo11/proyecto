const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser');
app.set('puerto', 3000);

app.use(morgan('dev'));
app.use(bodyParser.json()); // Corregido: se añade la función para interpretar JSON

// Configuración para CORS
app.use(function (req, res, next) {
    // Sitio web al que se le desea permitir la conexión
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Métodos de solicitud que se desean permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    
    // Encabezados de solicitud que se desean permitir
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    
    // Establecer a verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas
    // a la API (por ejemplo, en caso de que use sesiones)
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pasar a la siguiente capa de middleware
    next();
});

app.listen(port, () => {
    console.log("El servidor está funcionando"); // Aviso de que el servidor está funcionando correctamente
});

app.use(require('./routes/routes')); // Se importan las rutas
app.use(require('./routes/registro'));
app.use(require('./routes/login'));