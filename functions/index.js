const express = require('express');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firestore
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
// const indexRoutes = require('./routes/index');
const itemRoutes = require('./routes/item.js')(db);

// app.use('/', indexRoutes);
app.use('/items', itemRoutes);

exports.app = functions.https.onRequest(app);
