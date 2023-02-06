//Import Node Node Module
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Import delle routes
const charactersRoutes = require('./api/routes/characters');

//Connessione al DB di Mongo
mongoose.set('strictQuery', false);
const stringConnection = 'mongodb://127.0.0.1:27017/starwars';
mongoose.connect(stringConnection);
const database = mongoose.connection;

//Verico la connesione
database.once('connected', () => {
    console.log('\u001B[32m[StarWarsAPI] Database Connesso \x1b[0m');
})

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Entrypoint
app.use('/characters', charactersRoutes)

//Porta
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`\u001B[32m[StarWarsAPI] Server connesso sulla porta ${port} \x1b[0m`));