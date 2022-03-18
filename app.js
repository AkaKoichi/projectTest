require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var roomsRouter = require('./routes/roomsRoutes');
var usersRouter = require('./routes/users');
var cardsRouter = require('./routes/cardsRoutes');
var usersRouter = require('./routes/playersRoutes');
                

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/', indexRouter);
app.use('/api/rooms', roomsRouter);

app.use('/api/cards',cardsRouter);
app.use('/api/users', usersRouter);

module.exports = app;
