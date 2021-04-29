var app=new Vue({
    el:"#app",
    data:{
        emos:[],
        init:0,
    },
    methods:{
        emoClick:function (item) {
            axios.post("/api/addEmo/", {id: item.id})
                .then(function (dt) {
                    addEmo(item,1);
                })
        },
        renewEmo:function () {
            var _this=this;
            axios.get("/api/currentEmo/")
                .then(function (dt) {
                    for(var i=0; i<dt.data.length; i++)
                    {
                        if(dt.data[i].count>0)
                            createEmo( {url:'/images/emos/'+dt.data[i].id+'.svg'}, dt.data[i].count)
                    }
                    setTimeout(function () {
                        _this.renewEmo();
                    },5000)
                })
                .catch(function () {
                    setTimeout(function () {
                        _this.renewEmo();
                    },5000)
                })
        }
    },
    mounted: function () {
        var _this=this;
        axios.get("/api/emos")
            .then(function (dt) {
                _this.emos=dt.data;
                if(last) {
                    _this.emos = [dt.data[1]]
                    document.querySelector(".emos").style.width="auto"
                }
               // _this.renewEmo();
            })
    }
})
function createEmo(item, count) {
        setTimeout(function () {
            addEmo({url:item.url}, count);
        }, 5e3 * Math.random())

}
function addEmo(n,i) {
    var container=document.getElementById("emWr")
    var r = document.createElement("div");
    r.classList.add("emItem");
    var s = document.createElement("div");
    s.classList.add("emItemWr");
    container.appendChild(r);
    r.appendChild(s);
    s.innerHTML = "<image src='" + n.url + "'></image>";
    var d = document.createElement("div");
    d.classList.add("emCount");
    d.innerHTML = "+" + i;
    s.appendChild(d);
    setTimeout((function () {
        r.parentNode.removeChild(r)
    }), 2e3)
}