const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');
// const { Server } = require('socket.io');

// routes
const homeRoutes = require('./routes/home.js');

const app = express();
dotenv.config();

// constants
const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 9999;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/', homeRoutes);

const httpServer = http.createServer(app);

// creating a Socket.IO server
// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     credentials: true,
//   },
// });

// io.on('connection', (socket) => {
//   socket.on('message', (msg) => {
//     socket.emit('message', msg);
//   });
// });

mongoose.connect(CONNECTION_URL, () => {
  console.log('Database connected');
  httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
