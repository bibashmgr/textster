const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');

const app = express();
dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL;
const CONNECTION_URL = process.env.MONGODB_LOCAL_URL;
const PORT = process.env.PORT || 9999;

app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

const indexRoutes = require('./routes/index.js');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const contactRoutes = require('./routes/contact.js');
const conversationRoutes = require('./routes/conversation.js');
const messageRoutes = require('./routes/message.js');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/contact', contactRoutes);
app.use('/conversation', conversationRoutes);
app.use('/message', messageRoutes);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: CLIENT_URL,
    credentials: true,
  },
});

require('./config/socket.js')(io);

mongoose.connect(
  CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database connected');
    }
    httpServer.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Server running`);
      }
    });
  }
);
