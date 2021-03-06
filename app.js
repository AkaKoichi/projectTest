require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var roomsRouter = require('./routes/roomsRoutes');
var cardsRouter = require('./routes/cardsRoutes');
var usersRouter = require('./routes/playerRoutes');
                

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('VERY SECRET SECRET'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/cards',cardsRouter);

module.exports = app;
