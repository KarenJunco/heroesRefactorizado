// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRoute = require('./routes/main');

const heroesRoute = require('./routes/heroes')

app.use('/',mainRoute);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use('/heroes',heroesRoute);

	
// Ruta Créditos
app.get('/creditos',function (req, res){
	res.send('Autor: GRUPO 1 :  Karen Junco');
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});