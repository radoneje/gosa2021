(() => {
    var app = new Vue({
        el: "#app",
        data: {
            events: [],
            readonly:readonly
        },
        methods: {
            addEvent: async function () {
                if(readonly)
                    return;
                const r = await axios.post("/event");
                this.events.unshift(r.data);
            },
            copyIFrameRu:async function (item, e){

                var tmp=e.target.innerHTML;

                await navigator.clipboard.writeText(this.getIframeRu(item));
                e.target.innerHTML="copied";
                setTimeout(()=>{e.target.innerHTML=tmp},2*1000)
            },
            copyIFrameEn:async function (item, e){
                var tmp=e.target.innerHTML;
                await navigator.clipboard.writeText(this.getIframeEn(item));
                e.target.innerHTML="copied";
                setTimeout(()=>{e.target.innerHTML=tmp},2*1000)
            },
            getIframeRu: function (item) {
                ///*"https://front.sber.link/*
                let ret = '<iframe src="https://front.sber.link/spief2022Iframe/'+item.id+'/ru" width="1280" height="720" border="0"\
                                  style="overflow:hidden" frameBorder="0"\
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\
                                  allowFullScreen=""></iframe>' ;
                return ret;
            },
            getIframeEn: function (item) {
                let ret = '<iframe src="https://front.sber.link/spief2022Iframe/'+item.id+'/en" width="1280" height="720" border="0"\
                                  style="overflow:hidden" frameBorder="0"\
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\
                                  allowFullScreen=""></iframe>' ;
                return ret;
            },
            saveEvent: async function (item) {
                console.log("saveEvent",readonly);
                if(readonly)
                    return;
                const r = await axios.post("/event", item);
                console.log(item)
            },
            changeDate: function (event, item) {

                if(readonly)
                    return;
                document.querySelectorAll(".inplaceDiv").forEach(e=>{
                    e.parentElement.removeChild(e);
                })
                var wr = document.createElement("div")
                wr.classList.add("inplaceDiv")
                wr.style.top = (event.pageY - 20) + "px"
                wr.style.left = (event.pageX - 20) + "px"
                var inputStart = document.createElement("input")
                inputStart.classList.add("form-control")
                var inputEnd = document.createElement("input")
                inputEnd.classList.add("form-control")
                inputEnd.classList.add("mt-3")

                var close = document.createElement("input")
                close.type = "button"
                close.value = "Закрыть"
                close.classList.add("btn")
                close.classList.add("btn-outline-primary")
                close.classList.add("btn-sm")
                close.classList.add("mt-3")


                wr.appendChild(inputStart)
                wr.appendChild(inputEnd)
                wr.appendChild(close)
                document.body.appendChild(wr)
                inputStart.focus();

                inputStart.value = moment(item.date).format("DD.MM HH:mm")
                inputEnd.value = moment(item.dateEnd).format("HH:mm")

                close.addEventListener("click", () => {
                    wr.parentElement.removeChild(wr)
                })
                inputStart.onchange = async () => {

                    var found = inputStart.value.match(/(\d\d)\.(\d\d)\s(\d\d):(\d\d)/);
                    if (!found) {
                        inputStart.classList.add("error")
                        setTimeout(() => {
                        }, 0)
                        inputStart.focus();
                        return false
                    }
                    inputStart.classList.remove("error");
                    var d = new Date(moment(item.date).toISOString());

                    d.setMonth(parseInt(found[2]) - 1);
                    d.setDate(parseInt(found[1]))
                    d.setHours(parseInt(found[3]));
                    d.setMinutes(parseInt(found[4]))

                    item.date = moment(d).toISOString();
                    await this.saveEvent(item);

                }
                inputStart.onkeydown = async (e) => {
                    if (e.keyCode == 13)
                        inputEnd.focus();
                }
                inputEnd.onchange = async () => {
                    var found = inputEnd.value.match(/(\d\d):(\d\d)/);
                    if (!found) {
                        inputEnd.classList.add("error")
                        setTimeout(() => {
                        }, 0)
                        inputEnd.focus();
                        return false
                    }
                    inputEnd.classList.remove("error");
                    var d = new Date(item.date);
                    d.setHours(parseInt(found[1]));
                    d.setMinutes(parseInt(found[2]))
                    item.dateEnd = moment(d).toISOString();
                    await this.saveEvent(item);
                }
                inputEnd.onkeydown = async (e) => {
                    setTimeout(() => {
                        if (e.keyCode == 13 && !inputEnd.classList.contains("error"))
                            wr.parentElement.removeChild(wr)
                    }, 0)
                }
            }
        },
        watch:{
            events:function(){

            }
        },
        mounted: async function () {
            const r = await axios.get("/event");
            this.events = (r.data.sort((a, b) => {

                return moment(a.date).unix() - moment(b.date).unix()
            }));
            console.log("readonly", readonly)
        }
    });
})();
