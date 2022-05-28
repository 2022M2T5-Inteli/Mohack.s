// Importing all required libraries.
const express = require('express');

// Instancing app with express.
const app = express();

// Defining the server hostname and port.
const hostname = '127.0.0.1';
const port = 3024;

// Setting up the express static middleware. 
app.use(express.static("./FRONTEND/index.html"));

// Setting up the server.
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});