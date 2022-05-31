var express = require('express');
var router = express.Router();
const fs = require('fs');
const process = require( 'process');

/* GET home page. */
router.get('/', (req, res) => {
    res.send("Путь праведника труден,<br> ибо препятствуют ему себялюбивые и тираны из злых людей.<br> Блажен тот пастырь, кто во имя милосердия и доброты ведет слабых за собой сквозь долину тьмы, <br>ибо именно он и есть тот самый, кто воистину печется о ближних своих.");
});
router.get('/badbrowser', (req, res) => {
    res.render("badbrowser.pug");
});
router.get('/spief2022test',(req, res)=>{
    res.render("spief2022test");
})
router.get('/spief2022/:hall/:lang?', (req, res) => {
    if (!req.params.lang) {
        return res.redirect("/spief2022/" + req.params.hall + "/" + "ru");
    }
    req.params.lang = req.params.lang.toLowerCase().trim();
    if (!(req.params.lang.indexOf("ru")==0 || req.params.lang.indexOf("en")==0)) {

        return res.redirect("/spief2022/" + req.params.hall + "/" + "ru");
    }

    if (!isNumeric(req.params.hall))
        return res.sendStatus(404)
    res.render("spievPlayer.pug",{hall:req.params.hall, lang:req.params.lang})

})
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

router.post('/isAlive/', (req, res) => {
    if (!req.body.lang || req.body.lang != "ru" || req.body.lang != "en") {
        return res.sendStatus(404);
    }
    if (!Number.isInteger(req.body.hall))
        return res.sendStatus(404)
    if(req.body.clientid){
        req.body.clientid=process.hrtime.bigint();
        console.log("newClient", req.body.clientid)
    }
    req.aliveClient(req.body.clientid, req.body.lang ,req.body.hall);
    res.json({clientid:clientid, timeout:20*1000});
})
router.get('/dev/:hall/:lang?', function(req, res, next) {

    if(!req.params.lang)
        req.params.lang="ru";
    if(!(req.params.lang=="ru"|| req.params.lang=="en"))
        req.params.lang="ru";

    if(req.params.hall=="ms")
        return res.redirect("/dev/hall00/"+req.params.lang);

    if(req.params.hall=="hall01" && req.params.lang=="en")
        return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
    if(req.params.hall=="hall02" && req.params.lang=="en")
        return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
    if(req.params.hall=="hall03" && req.params.lang=="en")
        return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
    if(req.params.hall=="hall04" && req.params.lang=="en")
        return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
    if(req.params.hall=="hall05" && req.params.lang=="en")
        return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
    if(req.params.hall=="hall06" && req.params.lang=="en")
        return res.render('sorry', {hall:req.params.hall, lang:req.params.lang} );
    if(req.params.hall=="hall07" && req.params.lang=="en")
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
