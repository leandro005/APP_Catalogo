const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();


//Settings
app.set('port', process.env.PORT || 4000);
//app.set('views');

//Middleware
//app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/catalogos', require('./routes/catalogo.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;