var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const moment = require('moment')
var logger = require('morgan');
const config=require('./config');
const fs = require('fs');


var chat=[];
var emos=[];
for (var i=0; i<21; i++){
  emos.push({id:i, count:0});
}
var count={};
var stat={};
var source={id:0, idEng:0, newRus:0, newEng:0};
var session = require('express-session', {maxAge:60*60*1000})
var titles={};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{maxAge: 25}));
app.use(session({
  secret: 'you secrefevefvt key',
  saveUninitialized: true
}));




app.use( (req, res, next)=>{ req.count=count; req.stat=stat; req.source=source; req.emos=emos;req.chat=chat;req.config=config; next()});
app.get('/*',function(req,res,next){
  res.set('Cache-Control', 'public, max-age=20, s-maxage=20');
  next(); // http://expressjs.com/guide.html#passing-route control
});



app.use("/", (req,res, next)=>{req.titles=titles;next();});
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

setInterval(()=>{
  var txt="";
  Object.keys(count).forEach(hall=>{
    Object.keys(count[hall]).forEach(lang=>{
      txt+=moment().format("YYYY-MM-DD, HH:mm:ss")+"\t"+ hall+"\t"+lang+"\t"+count[hall][lang] +"\r\n";
    })
  })
  fs.appendFile("public/count.csv",txt, ()=>{;;});
},5*60*1000)

setInterval(()=>{
  var txt="";
  Object.keys(stat).forEach(hall=>{
    Object.keys(stat[hall]).forEach(lang=>{
      txt+=moment().format("YYYY-MM-DD, HH:mm:ss")+"\t"+ hall+"\t"+lang+"\t"+stat[hall][lang] +"\r\n";
    })
  })
  fs.appendFile("public/stat.csv",txt, ()=>{;;});
},5*60*1000)

module.exports = app;
