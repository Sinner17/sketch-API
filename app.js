let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');


let mongoose = require("mongoose");
let app = express();

let db;

mongoose.connect("mongodb://127.0.0.1:27017/sketch-API",{useNewUrlParser:true},
    (error,database) =>{
      if (error){
        throw error;
      } else {
        db = database;
        console.log("connected to database!");
      }
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
