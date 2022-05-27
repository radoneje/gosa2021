var express = require('express');
var router = express.Router();
var faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("OK FROM API")
});
router.get('/clients/:hall?/:lang?', function(req, res, next) {
  var ret;
  if(req.params.hall) {
    ret = req.clients().filter(c => {
      return c.hall = req.params.hall
    })
    if (req.params.lang)
      ret = ret.filter(c => {
        return c.lang = req.params.lang
      })
  }
  else
    ret=req.clients();

  res.json({count:ret.length, hall:req.params.hall, lang:req.params.lang})

});




module.exports = router;
