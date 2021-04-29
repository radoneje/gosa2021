var vue= new Vue({
    el:"#app",
    data:{
        sources:[]
    },
    methods:{},
    mounted:async function () {
       this.sources=[
           {id:"app01", title:"1", link:"https://front.sber.link/hls/app01/r_st01_360p/index.m3u8"},
           {id:"app02", title:"2", link:"https://front.sber.link/hls/app02/r_st01_360p/index.m3u8"},
           {id:"app03", title:"3", link:"https://front.sber.link/hls/app03/r_st01_360p/index.m3u8"},
           {id:"app04", title:"4", link:"https://front.sber.link/hls/app04/r_st01_360p/index.m3u8"},
           {id:"app05", title:"5", link:"https://front.sber.link/hls/app05/r_st01_360p/index.m3u8"},
           {id:"app06", title:"6", link:"https://front.sber.link/hls/app06/r_st01_360p/index.m3u8"},
       ]
        setTimeout(()=>{
            startVideo(this.sources.filter(()=>{return true}))

        },0)
    }
})

function startVideo(sources) {
    var item=sources.shift();
    initHLS(item, ()=>{if(sources.length>0)startVideo(sources)})

}
function initHLS(item, callback) {
    console.log("item")
    var video=document.getElementById(item.id);
    var hls = new Hls();
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(item.link);
        console.log(item.link)
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            video.play();
            callback();

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
    });
}
