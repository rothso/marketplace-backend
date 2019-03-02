const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const indexRoutes = require('./routes/index');
const itemRoutes = require('./routes/item');

app.use('/', indexRoutes);
app.use('/items', itemRoutes);

exports.app = functions.https.onRequest(app);
