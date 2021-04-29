var express = require('express');
var router = express.Router();
var faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("OK FROM API")
});
router.get('/test', function(req, res, next) {
  fs.appendFileSync('/var/message.txt', new Date()+"\r\n");
  res.send("OK FROM API")

});
router.get('/emos', function(req, res, next) {
  var ret=[];
  for (var i=0; i<2/*1*/; i++){
    ret.push({id:i, url:'/images/emos/'+i+'.svg'});
  }
  res.set('Cache-Control', 'public, max-age=5, s-maxage=5');
  res.json(ret);
});
router.get('/frazes', function(req, res, next) {
  res.set('Cache-Control', 'public, max-age=5, s-maxage=5');
  res.json(req.config.frazes);
});
router.get('/chat', function(req, res, next) {
  var ret=[];
  var arr=req.chat.slice(Math.max(req.chat.length - 50, 0))
  arr.forEach(item=> {
        ret.push(item);
      }
  )
  res.set('Cache-Control', 'public, max-age=5, s-maxage=5');
  res.json(ret);
});

router.post('/chat', function(req, res, next) {
  var item={id:uuidv4(),frazeId:req.body.frazeId,time:new Date()}
  console.log(item);
  req.chat.push(item);
  res.json(item);
})
router.post('/feedBack', function(req, res, next) {

  fs.appendFile('message.txt', '\r\n \r\n'+req.body.name+''+new Date()+'\r\n'+req.body.text, (err) => {
    res.json(1);
  });
});
router.post('/addEmo', function(req, res, next) {
  req.emos.forEach(e=>{
    if(e.id==req.body.id) {
      e.count = e.count + 1;
      setTimeout(() => {
        e.count = e.count - 1;
      }, 6000);
    }
  })

  res.json(1);
})
router.get('/currentEmo', function(req, res, next) {
  res.set('Cache-Control', 'public, max-age=5, s-maxage=5');
  res.json(req.emos);
})

router.get('/currSource', function(req, res, next) {
  res.set('Cache-Control', 'public, max-age=2, s-maxage=2');
  res.json(req.source.id);
})
router.get('/setSource/:index',(req, res, next)=>{if(!req.session.user)res.status(403);else next();}, function(req, res, next) {
  //res.set('Cache-Control', 'public, max-age=2, s-maxage=2');
  console.log(req.params.index)
  req.source.id=req.params.index;
  res.json(req.source.id);
})

router.get('/currSourceEng', function(req, res, next) {
  res.set('Cache-Control', 'public, max-age=2, s-maxage=2');
  res.json(req.source.idEng);
})
router.get('/setSourceEng/:index',(req, res, next)=>{if(!req.session.user)res.status(403);else next();} , function(req, res, next) {
  //res.set('Cache-Control', 'public, max-age=2, s-maxage=2');
  console.log(req.params.index)
  req.source.idEng=req.params.index;
  res.json(req.source.idEng);
})
router.get('/setNewRus/:index',(req, res, next)=>{if(!req.session.user)res.status(403);else next();}, function(req, res, next) {
  //res.set('Cache-Control', 'public, max-age=2, s-maxage=2');
  console.log(req.params.index)
  req.source.newRus=req.params.index;
  res.json(req.source.newRus);
})

router.get('/setNewEng/:index',(req, res, next)=>{if(!req.session.user)res.status(403);else next();}, function(req, res, next) {
  //res.set('Cache-Control', 'public, max-age=2, s-maxage=2');
  console.log(req.params.index)
  req.source.newEng=req.params.index;
  res.json(req.source.newEng);
})

router.get('/currNewRus', function(req, res, next) {

  console.log("currNewRus", req.source)
  res.json(req.source.newRus);
})
router.get('/currNewEng', function(req, res, next) {
  res.json(req.source.newEng);
})
router.post('/titleForm', function(req, res, next) {
  console.log(req.body)
 var fs=require('fs')
  var path=require('path')
  if(!req.body.a.i)
    req.body.a.i="";
  if(!req.body.a.f)
    req.body.a.f="";
  if(!req.body.a.p)
    req.body.a.p="";

  if(!req.body.b.i)
    req.body.b.i="";
  if(!req.body.b.f)
    req.body.b.f="";
  if(!req.body.b.p)
    req.body.b.p="";

  var filename=path.join(__dirname, '../public/title01.json');
  fs.writeFileSync(filename, JSON.stringify([{f:req.body.a.i+" " + req.body.a.f,p:req.body.a.p}]));
  filename=path.join(__dirname, '../public/title02.json');
  fs.writeFileSync(filename, JSON.stringify([{f:req.body.b.i+" " + req.body.b.f,p:req.body.b.p}]));
  res.json(req.body);
})

router.get('/titlesjson', function(req, res, next) {
  console.log(req.titles)
  res.json(req.titles);
})






module.exports = router;
