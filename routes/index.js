const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const process = require('process');
const moment = require('moment');
const axios = require('axios');
const checkDiskSpace = require('check-disk-space').default

function basicAuth(req, res, next) {
    const auth = [
        {login: 'editor', password: 'dfczgegrby', readonly: false},
        {login: 'viewer', password: 'spief2022', readonly: true}
    ]// change this
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    // Verify login and password are set and correct
    if (login && password) {
        var find = auth.filter(a => {
            return login === a.login && password === a.password
        });
        if (find.length > 0) {
            req.user = find[0];
            return next();
        }
    }

// Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message
}

/* GET home page. */
router.get('/', (req, res) => {
    res.send("Путь праведника труден,<br> ибо препятствуют ему себялюбивые и тираны из злых людей.<br> Блажен тот пастырь, кто во имя милосердия и доброты ведет слабых за собой сквозь долину тьмы, <br>ибо именно он и есть тот самый, кто воистину печется о ближних своих.");
});
router.get('/badbrowser', (req, res) => {
    res.render("badbrowser.pug");
});
router.get('/spief2022test', (req, res) => {
    res.render("spief2022test");
})
router.get('/admin', basicAuth, (req, res) => {
    res.render("spief2022admin", {readonly: req.user.readonly});
})
router.get('/spief2022Iframe/:id/:lang', async (req, res) => {

    req.params.lang = req.params.lang.toLowerCase();
    if (req.params.lang != 'en')
        req.params.lang = "ru";
    var r = await fs.promises.readFile(path.join(__dirname, "../spiefHall.json"), "utf8");
    var halls = JSON.parse(r);
    var hall = null;
    halls.forEach(e => {
        if (e.id == req.params.id)
            hall = e;
    });
    if (!hall)
        return res.json(1);//.sendStatus(404);


    var url = ((req.params.lang == "ru") ? hall.data.recRu : hall.data.recEn) || "";
    var m3u8 = "https://hls-fabrikanews.cdnvideo.ru/fabrikanews4/" + hall.data.source.toLowerCase() +"_"+ req.params.lang + "/playlist.m3u8"
    var poster = (req.params.lang == "ru") ? "https://front.sber.link/images/poster/1ru.png" : "https://front.sber.link/images/poster/1en.png"
    res.render("spievIframe.pug", {
        item: {
            id: hall.id,
            status: hall.data.status,
            lang: req.params.lang,
            source: hall.data.source || "",
            url,
            poster,
            m3u8
        }
    });
})
router.post('/event', basicAuth, async (req, res) => {

    var r = await fs.promises.readFile(path.join(__dirname, "../spiefHall.json"), "utf8");
    var halls = JSON.parse(r);
    if (!req.body.id) {
        const {
            v1: uuidv1,
            v4: uuidv4,
        } = require('uuid')
        req.body.id = uuidv4();
        halls.push({id: req.body.id});
    }

    var ret = {}
    halls.forEach(e => {
        if (e.id == req.body.id) {
            e.data = req.body.data || {status: 0, number: 1};
            e.date = req.body.date || moment().toISOString();
            e.dateEnd = req.body.dateEnd || moment().toISOString();
            ret = e;
        }
    });
    await fs.promises.writeFile(path.join(__dirname, "../spiefHall.json"), JSON.stringify(halls));
    var r=await req.knex("t_hallsupdate").insert({}, "*");
    for(let h of halls)
    await req.knex("t_halls").insert({updateid:r[0].id,id:h.id, date:h.date, dateEnd:h.dateEnd, data: JSON.stringify(h.data)}, "*");

    res.json(ret);
})
router.get("/event", basicAuth, async (req, res) => {
    res.sendFile(path.join(__dirname, "../spiefHall.json"))

});

router.get("/eventRawStat/:hallid", basicAuth, async (req, res) => {
    var r=await req.knex.select("*").from("v_rowStat").where({id:req.params.hallid});
    res.json(r);

});
router.get("/inputStreams", basicAuth, async (req, res) => {
    var r=await req.knex.select("*").from("t_halls").orderBy("date");

    res.render("inputStreams", {r})

});
router.get("/eventStat", basicAuth, async (req, res) => {

    var ret=await req.knex.select("*").from("v_eventsStat")
    for(let hall of ret){

       var r= await req.knex.select("*").from("t_unic").where({hallid:hall.id})
        if(r.length>0)
        {
            hall.unicRu=r[0].unicru
            hall.unicEn=r[0].unicen
            hall.totalRu=r[0].ru
            hall.totalEn=r[0].en
        }
        else{
            hall.totalRu=0
            hall.totalEn=0
        }
    }
    res.json(ret );
});

router.post('/spief2020isAlive/', async (req, res) => {
    if (req.body.lang != "en") {
        req.body.lang = "ru"
    }
    var halls = req.spiefHalls;

    var hall = halls.filter((h) => {
        return h.id == req.body.id
    })
    if (hall.length == 0)
        return res.sendStatus(404);
    var status = hall[0].data.status;
    var url = (req.body.lang == "ru") ? hall[0].data.recRu : hall[0].data.recEn;
    var m3u8 = "https://hls-fabrikanews.cdnvideo.ru/fabrikanews4/" + hall[0].data.source.toLowerCase() +"_"+ req.body.lang + "/playlist.m3u8"

    if (!req.body.clientid) {
        req.body.clientid = new String( process.hrtime.bigint());
        console.log("newClient", req.body.clientid)
        let r=await req.knex.select("*").from("t_unic").where({hallid:req.body.id});
        if(r.length==0){
            r=await  req.knex("t_unic").insert({hallid:req.body.id, date: new Date()},"*");
        }
        let upd={hallid:req.body.id,  date: new Date()}
        if (req.body.lang=="ru")
            upd.ru=r[0].ru+1;
        else
            upd.en=r[0].en+1;

        if(!req.body.unig ){
            if (req.body.lang=="ru")
                upd.unicru=r[0].unicru+1;
            else
                upd.unicen=r[0].unicen+1;
        }
        await req.knex("t_unic").update(upd).where({id:r[0].id})

    }

    req.aliveSpiefClient(req.body.clientid, req.body.lang ,req.body.id);
    res.json({clientid: req.body.clientid, timeout: 20 * 1000, status, url, m3u8});
})

router.get('/spief2022/:hall/:lang?', (req, res) => {
    if (!req.params.lang) {
        return res.redirect("/spief2022/" + req.params.hall + "/" + "ru");
    }
    req.params.lang = req.params.lang.toLowerCase().trim();
    if (!(req.params.lang.indexOf("ru") == 0 || req.params.lang.indexOf("en") == 0)) {

        return res.redirect("/spief2022/" + req.params.hall + "/" + "ru");
    }

    if (!isNumeric(req.params.hall))
        return res.sendStatus(404)
    res.render("spievPlayer.pug", {hall: req.params.hall, lang: req.params.lang});
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
    if (req.body.clientid) {
        req.body.clientid = process.hrtime.bigint();
        console.log("newClient", req.body.clientid)
    }
    req.aliveClient(req.body.clientid, req.body.lang, req.body.hall);
    res.json({clientid: clientid, timeout: 20 * 1000});
})
router.get('/dev/:hall/:lang?', function (req, res, next) {

    if (!req.params.lang)
        req.params.lang = "ru";
    if (!(req.params.lang == "ru" || req.params.lang == "en"))
        req.params.lang = "ru";

    if (req.params.hall == "ms")
        return res.redirect("/dev/hall00/" + req.params.lang);

    if (req.params.hall == "hall01" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
    if (req.params.hall == "hall02" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
    if (req.params.hall == "hall03" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
    if (req.params.hall == "hall04" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
    if (req.params.hall == "hall05" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
    if (req.params.hall == "hall06" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
    if (req.params.hall == "hall07" && req.params.lang == "en")
        return res.render('sorry', {hall: req.params.hall, lang: req.params.lang});


    res.render('dev', {hall: req.params.hall, lang: req.params.lang});
})
router.get('/sorry/:hall/:lang?', function (req, res, next) {

    if (!req.params.lang)
        req.params.lang = "ru";
    if (!(req.params.lang == "ru" || req.params.lang == "en"))
        req.params.lang = "ru";

    if (req.params.hall == "ms")
        return res.redirect("/dev/hall00/" + req.params.lang);
    res.render('sorry', {hall: req.params.hall, lang: req.params.lang});
})
router.get('/currplayer/:hall/:lang', function (req, res, next) {

    fs.readFile("./halls.json", async (err, data) => {
        if (err)
            return res.sendStatus(403);
        var s = JSON.parse(data)
        s = s.filter(item => {
            return item.id == req.params.hall && item.lang == req.params.lang
        })
        if (s.length > 0)
            return res.json(s[0]);
        else
            return res.sendStatus(404);
    })

});



router.post('/streamPublished', async function (req, res, next) {
    try {
        req.streamUp(req.body.name);

        var m = req.body.name.match(/^([a-z]\d{0,3})_([re]{1}[un]{1})$/)
        if (m) {
            await axios.post("http://192.168.1.7:3000/streamPublished",{key:m[1], lang:m[2]});
            console.log("send command to publish stream", m[1],m[2])
        }
    }
    catch (e){console.log(e)}
    res.json("ok")
});

router.post('/streamDown', function (req, res, next) {

    try {
        req.streamDown(req.body.name);
    }
    catch (e){console.log(e)}
    res.json("ok")
});
router.get('/streams',basicAuth, function (req, res, next) {

    res.json(req.streams)
});
router.post('/restreamStopped', function (req, res, next) {
    console.log('restreamStopped', req.body.key, req.body.lang)
    req.restreamStopped(req.body.key, req.body.lang);
    res.json(1)
});
router.post('/restreamStarted', function (req, res, next) {
    console.log('restreamStarted')
    req.restreamStarted(req.body.key, req.body.lang);
    res.json(1)
});
router.post('/recStopped', function (req, res, next) {
    console.log('recStopped', req.body.key, req.body.lang)
    try {
        req.recStopped(req.body.key, req.body.lang);
    }
    catch (e){console.warn(e)}
    res.json(1)

});
router.post('/recStarted', function (req, res, next) {
    console.log('recStarted')
    req.recStarted(req.body.key, req.body.lang);
    res.json(1)
});
router.get('/records', basicAuth, async function (req, res, next) {
    let items=await fs.promises.readdir("/var/video")
    items=items.filter(f=>f.match(/\.mp4$/))
    let files=[]
    for(item of items){
       let stat=await fs.promises.stat(path.join("/var/video", item));
       files.push({name:item, size:numberWithSpaces(stat.size)});
    }

    let diskSpace=await checkDiskSpace("/var/video")
    res.json({files, diskSpace})
});
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
router.post('/dropPublisher', basicAuth, async function (req, res, next) {

    res.json(1);
    console.log("dropPublisher", "http://192.168.1.118/control/drop/publisher?app=live&name="+req.body.name)
    await axios.get("http://192.168.1.118/control/drop/publisher?app=live&name="+req.body.name);
});
router.get('/breakfast', async function (req, res, next) {

   res.render("breakfast");
});


module.exports = router;
