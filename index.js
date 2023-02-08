//Importazione dei noduli di NODE
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Stringe che contengono gli URL dei Middlware 
const characterRoutes = require('./api/routes/character');
/* const creatureRoutes = require('./api/routes/creature');
const droidRoutes = require('./api/routes/droid');
const filmRoutes = require('./api/routes/film');
const locationRoutes = require('./api/routes/location');
const organizationRoutes = require('./api/routes/organization');
const planetRoutes = require('./api/routes/planet');
const seriesRoutes = require('./api/routes/series');
const speciesRoutes = require('./api/routes/species');
const starshipRoutes = require('./api/routes/starship');
const vehicleRoutes = require('./api/routes/vehicle');
const weaponsRoutes = require('./api/routes/weapons'); */

//Connessione al DB di Mongo
mongoose.set('strictQuery', false);
const stringConnection = 'mongodb://127.0.0.1:27017/starwars';
mongoose.connect(stringConnection);
const connection = mongoose.connection;

connection.on('connected', function() {
    console.log('\u001B[32m[StarWarsAPI] Database Connesso \x1b[0m');
});

connection.on('error', function(err) {
    console.error('\u001B[31m[StarWarsAPI] Errore durante la connessione a MongoDB \x1b[0m', err);
});


// Middleware per registrare le richieste HTTP effettuate al server
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware per accadere agli URL
app.use('/character', characterRoutes);
/* app.use('/creature', creatureRoutes);
app.use('/droid', droidRoutes);
app.use('/film', filmRoutes);
app.use('/location', locationRoutes);
app.use('/organization', organizationRoutes);
app.use('/planet', planetRoutes);
app.use('/series', seriesRoutes);
app.use('/species', speciesRoutes);
app.use('/starship', starshipRoutes);
app.use('/vehicle', vehicleRoutes);
app.use('/weapons', weaponsRoutes); */

//Porta
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\u001B[32m[StarWarsAPI] Server connesso sulla porta ${port} \x1b[0m`));