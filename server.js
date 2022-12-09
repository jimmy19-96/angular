const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/catalogo'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ARTESANIAS_ARANGO/catalogo'));
});

// default Heroku port
app.listen(5000);