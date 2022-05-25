const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

const app = express();
dotenv.config();

// environment-variables
const CLIENT_URL = process.env.CLIENT_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;
const CONNECTION_URL = process.env.MONGODB_LOCAL_URL;
const PORT = process.env.PORT || 9999;

// config
require('./config/passport.js');

// middlewares
app.use(
  cors({
    origin: CLIENT_URL,
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
// app.use(passport.authenticate(session));
app.use(passport.initialize());
app.use(passport.session());

// routes
const indexRoutes = require('./routes/index.js');
const authRoutes = require('./routes/auth.js');
const contactRoutes = require('./routes/contact.js');
const conversationRoutes = require('./routes/conversation.js');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);
app.use('/conversation', conversationRoutes);

// creating http-server
const httpServer = http.createServer(app);

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
