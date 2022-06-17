const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const { Server } = require('socket.io');

const app = express();
dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;
const CONNECTION_URL = process.env.MONGODB_LOCAL_URL;
const PORT = process.env.PORT || 9999;

require('./config/passport.js');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({ mongoUrl: CONNECTION_URL }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

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
    origin: 'http://localhost:3000',
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
        console.log(`Server running on http://localhost:${PORT}`);
      }
    });
  }
);
