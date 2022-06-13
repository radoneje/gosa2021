var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const moment = require('moment')
var logger = require('morgan');
const config = require('./config');
const fs = require('fs');
var lessMiddleware = require('less-middleware');


var session = require('express-session', {maxAge: 60 * 60 * 1000})
var titles = {};

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');


var app = express();
app.locals.moment = require('moment');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: 25}));
app.use(session({
    secret: 'you secrefevefvt key',
    saveUninitialized: true
}));

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: config.pgConnection,
    pool: {min: 0, max: 40}
});
app.use((req, res, next) => {
    req.knex=knex;
    next();
});


var clients = [];
clearClients();

function clearClients() {
    var now = moment().add(-30, 'seconds').unix();
    clients = clients.filter(c => {
        return c.date < now;
    });
    setTimeout(clearClients, 30 * 1000);
}

let spiefClients = [];
let spiefHalls = [];
const spiefFilename = path.join(__dirname, "SpiefClients.json");
if (fs.existsSync(spiefFilename))
    spiefClients = JSON.parse(fs.readFileSync(spiefFilename, "utf8"));

clearSpiefClients();
clearClients();

async function clearClients() {
    var now = moment().add(-30, 'seconds').unix();
    clients = clients.filter(c => {
        return c.date < now;
    });
    setTimeout(clearClients, 30 * 1000);
}

async function clearSpiefClients() {
    let now = moment().unix();
    spiefClients = spiefClients.filter(c => {
        return now - (c.time) < 30;
    });
    await fs.promises.writeFile(spiefFilename, JSON.stringify(spiefClients));
    let halls = [];
    spiefHalls.forEach(hall => {
        let curr = spiefClients.filter(c => {
            return c.hall == hall.id
        });
        if (curr.length > 0) {
            let ru = curr.filter(cr => {
                return cr.lang = 'ru'
            }).length;
            let en = curr.length - ru;
            halls.push({id:hall.id, ru, en});
        }
    })
   if(halls.length>0) {
       let r=await knex("t_stat").insert({date: new Date()}, "*")
       let totalru=0;
       let totalen=0;
       for (let h of halls) {
           await knex("t_stathall").insert({statid:r[0].id,hallid:h.id,ru:h.ru, en:h.en})
           totalru+=h.ru;
           totalen+=h.en;
       }
       await knex("t_stat").update({totalRu: totalru, totalEn:totalen}, ).where({id:r[0].id});
   }

    setTimeout(clearSpiefClients, 30 * 1000);
}

const spiefHallFilename = path.join(__dirname, "spiefHall.json");
if (fs.existsSync(spiefHallFilename))
    spiefHalls = JSON.parse(fs.readFileSync(spiefHallFilename, "utf8"));

updateSpiefHalls();

async function updateSpiefHalls() {
    if (fs.existsSync(spiefHallFilename))
        spiefHalls = JSON.parse(await fs.promises.readFile(spiefHallFilename, "utf8"));
    setTimeout(updateSpiefHalls, 10 * 1000);
}

var streams={};
app.use((req, res, next) => {
    req.streamUp = function(name){
        streams[name]={start:new Date()};
    };
    req.streamDown = function(name){
        if(streams[name])
            delete streams[name];
    };
    req.recStarted=function(key, lang){
        let name=key+"_"+lang;
        console.log("recStarted: ",streams[name])
        if(streams[name])
            streams[name].rec=new Date();
    }
    req.restreamStarted=function(key, lang){
        let name=key+"_"+lang;
        if(streams[name])
            streams[name].restream=new Date();
    }
    req.recStopped=function(key, lang){

        let name=key+"_"+lang;
        console.log("recStopped: ",streams[name])
        if(streams[name])
            delete streams[name].rec
    }
    req.restreamStopped=function(key, lang){
        let name=key+"_"+lang;
        if(streams[name])
            delete streams[name].restream
    }

    req.streams=streams;
    next();
});

app.use((req, res, next) => {
    req.spiefHalls = spiefHalls;
    next();
});

app.use((req, res, next) => {
        req.config = config;
        req.aliveClient = (clientid, lang, hall) => {
            if (clients.filter(c => {
                return c.clientid == clientid
            }).length == 0)
                clients.push({clientid, lang, hall})
            clients.forEach(c => {
                if (c.clientid == clientid)
                    c.time = moment().unix();
            })
        };
        req.clients = () => {
            return clients.filter(() => {
                return true
            })
        }
        next()
    }
);
app.use((req, res, next) => {
        req.config = config;
        req.aliveSpiefClient = (clientid, lang, hall) => {
            if (spiefClients.filter(c => {
                return c.clientid == clientid
            }).length == 0)
                spiefClients.push({clientid, lang, hall})
            spiefClients.forEach(c => {
                if (c.clientid == clientid)
                    c.time = moment().unix();
            })
        };
        req.spiefClients = () => {
            return spiefClients.filter(() => {
                return true
            })
        }
        next();
    }
);


app.get('/*', function (req, res, next) {
    res.set('Cache-Control', 'public, max-age=20, s-maxage=20');
    next(); // http://expressjs.com/guide.html#passing-route control
});

app.use("/", (req, res, next) => {
    req.titles = titles;
    next();
});
app.use('/', indexRouter);
app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
