const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const indexRoutes = require('./routes/index');
const itemRoutes = require('./routes/item');

app.use('/', indexRoutes);
app.use('/item', itemRoutes);

app.listen(port, () => {
  console.log(`We are live on port ${port}!`);
});
