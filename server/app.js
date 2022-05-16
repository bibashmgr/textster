const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');

// importing routes
const indexRoutes = require('./routes/index.js');

const app = express();
dotenv.config();

// declaring constants
const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 9999;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/', indexRoutes);

// creating http-server
const httpServer = http.createServer(app);

mongoose.connect(CONNECTION_URL, () => {
  console.log('Database connected');
  httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
