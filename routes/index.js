var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */

router.post('/', function(req, res, next) {
  console.log("test")
  res.json(1)
})
router.get('/dev/:hall/:lang?', function(req, res, next) {

  if(!req.params.lang)
    req.params.lang="ru";
  if(!(req.params.lang=="ru"|| req.params.lang=="en"))
    req.params.lang="ru";

  if(req.params.hall=="ms")
    return res.redirect("/dev/hall00/"+req.params.lang);

  if(req.params.hall!=="hall00" && req.params.lang=="en")
    return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );

  res.render('dev', {hall:req.params.hall, lang:req.params.lang} );
})
router.get('/sorry/:hall/:lang?', function(req, res, next) {

  if(!req.params.lang)
    req.params.lang="ru";
  if(!(req.params.lang=="ru"|| req.params.lang=="en"))
    req.params.lang="ru";

  if(req.params.hall=="ms")
    return res.redirect("/dev/hall00/"+req.params.lang);
  res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
})

router.post('/feedback', function(req, res, next) {
  res.json(req.body)
})
router.get('/fas/:stream/:noFrame?', function(req, res, next) {
  if(!req.params.stream)
    req.params.stream=0;
  var url=[
      "https://hls-fabrikanews.cdnvideo.ru/fabrikanews2/fas1/playlist.m3u8",
    "https://hls-fabrikanews.cdnvideo.ru/fabrikanews2/fas2/playlist.m3u8"
  ]
  res.render('fas', { title: 'FAS forum', data:{url:url, stream:req.params.stream, noFrame:req.params.noFrame} });
})
router.get('/test/:lang?', function(req, res, next) {
  if(!req.params.lang)
    req.params.lang="RUS"
  res.render('test', { title: 'Express', src:"https://rtmp.may24.pro/hls/st01_720p_r/index.m3u8", lang:req.params.lang.toUpperCase() });
})

router.get('/rezerv', function(req, res, next) {
  console.log("check login", req.session.user)
  if(!req.session.user)
    return res.redirect("/login")
  res.render('rezerv');
})
router.get('/title', function(req, res, next) {
  console.log("check login", req.session.user)
  if(!req.session.user)
    return res.redirect("/login")
  res.render('title');
})

router.get('/admin', function(req, res, next) {
  console.log("check login", req.session.user)
  if(!req.session.user)
    return res.redirect("/login")
  res.render('admin');
})

router.get('/login', function(req, res, next) {
  req.session.user=null;
  res.render('login');
})
router.post('/login', function(req, res, next) {
  req.session.user=null;
  console.log("req.body", req.body)
  if(req.body.pass=="bolero123")
  {
    console.log("login ok")
    req.session.user='true';
    return res.redirect("/admin")
  }
  else
    res.render('login');
})
router.get('/mosaic', function(req, res, next) {
  console.log("mosaic")
  res.render('mosaic');
})
router.get('/:lang?', function(req, res, next) {
  if(!req.params.lang)
    req.params.lang="RUS"
  req.params.lang=req.params.lang.toUpperCase();
  var rusIndex=req.source.id==0?1:3;
  var engIndex=req.source.idEng==0?2:4;
console.log(req.params.lang=="RUS", req.params.lang)
  res.render('index', { title: 'player',langIndex:req.params.lang=="RUS"?0:1, src:(req.params.lang=="RUS"?("https://hls.sber.link/fabrikanews/fabrikanews"+rusIndex+"/playlist.m3u8"):("https://hls.sber.link/fabrikanews/fabrikanews"+engIndex+"/playlist.m3u8")), lang:req.params.lang.toUpperCase() });
})
router.get('/', function(req, res, next) {

    req.params.lang="RUS"
  res.redirect("/"+req.params.lang)
 // res.render('index', { title: 'Express', src:"https://hls.sber.link/fabrikanews/gosarus/playlist.m3u8", lang:req.params.lang.toUpperCase() });
})
router.get('/currplayer/:hall/:lang', function(req, res, next) {

  fs.readFile("./halls.json", async(err, data)=>{
    if(err)
      return res.sendStatus(403);
    var s=JSON.parse(data)
    s=s.filter(item=>{
      return item.id==req.params.hall && item.lang==req.params.lang
    })
    if(s.length>0)
      return res.json(s[0]);
    else
      return res.sendStatus(404);
  })

});







module.exports = router;
