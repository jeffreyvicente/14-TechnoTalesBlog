const path = require('path');
const express = require('express');
const session = reqire('express-session');
const exphbs = require('express-handlebars');
//const routes = require('./controllers');
//const helpers = require('./utils/helpers');

const sequelize = require('./config/connection')
const SequlizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers});

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequlizeStore({
        db: sequelize
    })
};