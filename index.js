//Importazione dei noduli di NODE
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Stringe che contengono gli URL dei Middlware 
const charactersRoutes = require('./api/routes/character');

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
app.use('/characters', charactersRoutes)

//Porta
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\u001B[32m[StarWarsAPI] Server connesso sulla porta ${port} \x1b[0m`));