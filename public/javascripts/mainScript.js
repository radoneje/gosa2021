//alert(Check_IE_Version())


window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-88562228-1');

startVideo(document.getElementById("local_video"));
var source=[
    ["https://hls.sber.link/fabrikanews/fabrikanews1/playlist.m3u8",
        "https://hls.sber.link/fabrikanews/fabrikanews3/playlist.m3u8",
        "https://s13917.cdn.ngenix.net/live/_definst_/rus/playlist.m3u8?DVR"
    ],
    ["https://hls.sber.link/fabrikanews/fabrikanews2/playlist.m3u8",
        "https://hls.sber.link/fabrikanews/fabrikanews2/playlist.m3u8",
        "https://s13917.cdn.ngenix.net/live/_definst_/eng/playlist.m3u8?DVR"
    ]
];


function startVideo(video) {

function tryRestartPlay(){
    setTimeout(function(){

        console.log("tryRestartPlay", video)
        if(video.played.length==0){
            video.currentTime=video.duration;
            video.play();
            tryRestartPlay();
        }
    }, 1000)
}

    if (Hls.isSupported()) {
      /*  var playBtn=document.getElementById("playWr");
        playBtn.style.display="flex";
        playBtn.addEventListener("click", function () {
            video.play();
            video.controls=true;
            playBtn.style.display="none";
        })*/

        var hls = new Hls();
        console.log("init HLS")
        hls.loadSource(video.src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            console.log("MANIFEST_PARSED")
            var banner=document.querySelector(".playWr");
            banner.style.display="flex";
            banner.addEventListener("click",
               function () {
                tryRestartPlay();
                    console.log("PLAY")

                   video.play();
                   video.controls=true;
                    banner.style.display="none";
            })
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                switch(data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        // try to recover network error
                        console.log("fatal network error encountered, try to recover");
                        hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.log("fatal media error encountered, try to recover");
                        hls.recoverMediaError();
                        break;
                    default:
                        // cannot recover
                        hls.destroy();
                        break;
                }
            }
        });
    }
    // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
    // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
    // This is using the built-in support of the plain video element, without using hls.js.
    // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
    // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.controls=true;
        //video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }
    else if(!getMobileOperatingSystem()){
        return getFlashObj();
    }
}
function GetFlashPlayer(){
    return('<object id="videoObj" width="1020" height="574" id="slon" data="https://www.aloha.cdnvideo.ru/aloha/slon/SlonPlayer_new.swf" type="application/x-shockwave-flash">'+
        '<script type="text/javascript">'+
        'if (typeof window.external.msActiveXFilteringEnabled != "undefined"'+
        ' && window.external.msActiveXFilteringEnabled() == true) {'+
        'document.write(\'<div style="width:1020px;height:574px">Для просмотра отключите фильтрацию ActiveX внастройках браузера и перезагрузите эту страницу</div>\');}<\/script>' +
        '<param name="movie" value="https://www.aloha.cdnvideo.ru/aloha/slon/SlonPlayer_new.swf" />'+
        '<param name="allowfullscreen" value="true" />'+
        '<param name="allowscriptaccess" value="always" />'+
        '<param name="flashvars" value='+
        '"config='+
        '{ \'playlist\':'+
        '{\'autoPlay\' : \'false\' '+
        ', \'startPoster\':\'/images/poster2.png\' '+                                        ',\'clip\' :  '+
        '{\'live\': \'true\'  '+
        ',\'progressLine\':\'false\' '+
        ',\'url\': \'rtmp://rtmp-aurora.cdnvideo.ru/aurora-pull/100\' '+
        '}'+
        '}'+
        '};"'+
        '/>'+
        '</object>');
}
function Check_IE_Version(){
    var rv = -1; // Return value assumes failure.

    if (navigator.appName == 'Microsoft Internet Explorer'){

        var ua = navigator.userAgent,
            re  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

        if (re.exec(ua) !== null){
            rv = parseFloat( RegExp.$1 );
        }
    }
    else if(navigator.appName == "Netscape"){
        /// in IE 11 the navigator.appVersion says 'trident'
        /// in Edge the navigator.appVersion does not say trident
        if(navigator.appVersion.indexOf('Trident') === -1) rv = 12;
        else rv = 11;
    }

    return rv;
}
function  getFlashObj() {
    alert('flash');
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }


    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return null;
}
