const express = require('express');
const UserRouters = require('./routes/user.router');
const cors = require('cors');
const app = express();

// Middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes
app.use('/api/user/', UserRouters)


module.exports = app;