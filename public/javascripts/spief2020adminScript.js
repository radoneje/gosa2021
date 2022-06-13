(() => {
    var app = new Vue({
        el: "#app",
        data: {
            events: [],
            readonly:readonly,
            section:0,
            stat:[],
            streams:{},
            records:[],
            diskSpace:{}
        },
        methods: {
            showRecord:function (filename){
                filename="https://front.sber.link/video/"+filename;
                const myModal = new bootstrap.Modal(document.getElementById('modal'))
                myModal.show();

                document.getElementById("chart").innerHTML="<video src='"+filename+"' controls style='width:100%'></video>";


            },
            copyRecord:function (filename, event){
                filename="https://front.sber.link/video/"+filename;
                let tmp=event.target.innerHTML;
                navigator.clipboard.writeText(filename);
                event.target.innerHTML="Copied";
                setTimeout(()=>{event.target.innerHTML=tmp},2000)
            },
            checkRestream: function(key, lang){
                if(!this.streams[key+"_"+lang])
                    return false;
                if(!this.streams[key+"_"+lang].restream)
                    return false;
                var l=moment.utc(moment().diff(moment(this.streams[key + "_" + lang].restream))).format("HH:mm:ss")
                return l
            },
            checkRec: function(key, lang){
                if(!this.streams[key+"_"+lang])
                    return false;
                if(!this.streams[key+"_"+lang].rec)
                    return false;
                var l=moment.utc(moment().diff(moment(this.streams[key + "_" + lang].rec))).format("HH:mm:ss")
                return l
            },
            checkPublish: function(key, lang){
                if(this.streams[key+"_"+lang]) {
                    var l=moment.utc(moment().diff(moment(this.streams[key + "_" + lang].start))).format("HH:mm:ss")
                    return l
                }
                return false;
            },
            updateStreams:async function(){
                try{
                   var r=await axios.get("/streams")
                    this.streams=r.data;
                }
                catch(e){
                    console.warn(e);
                }
                setTimeout(()=>{
                    this.updateStreams()
                },5000)
            },
            showStat:async function(item){
                const myModal = new bootstrap.Modal(document.getElementById('modal'))
                myModal.show();

                document.getElementById("chart").innerHTML="";
                anychart.format.outputDateTimeFormat("HH:mm");
                var chart = anychart.area();
                var r=await axios.get("/eventRawStat/"+item.id)
                // set the data
                let data=[];
                console.log(r.data)
                r.data.forEach(rr=>{
                    data.push([new Date(rr.date), rr.ru, rr.en])
                });
                var dateScale = anychart.scales.dateTime();
                var dateTicks = dateScale.ticks();
                dateTicks.interval(1);
                chart.xScale(dateScale);

                var seruies=chart.data(data);


                // set chart title
                chart.title(item.data.title);
                // set the container element
                chart.container("chart");
                // initiate chart display
                chart.draw();

            },
            getToExcel:function (){
                var table = document.getElementById("statTable");
                var rows =[];
                for(var i=0; i< table.rows.length;i++){
                    var cells=[];
                    for(var j=0; j<table.rows[i].cells.length; j++) {
                        cells.push(table.rows[i].cells[j].innerHTML.replace(/;/gi, ","));
                    }
                    rows.push(cells)

                }
                var csvContent = "data:text/csv;charset=utf-8,";
                /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
                rows.forEach(function(rowArray) {
                    row = rowArray.join(";");
                    csvContent += row + "\r\n";
                });
                var encodedUri = encodeURI((csvContent));
                var link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "statistics.csv");
                document.body.appendChild(link);
                /* download the data file named "Stock_Price_Report.csv" */
                link.click();

            },
            eventStsusDescr:function (i){
                /*0 - новая сессия
1 - подтвержденная сессия
2 - ожидаем подтверждение
3 - отказ от сессии/отмена

*/          switch (i){
                    case 1: return "подтвержденная"; break;
                    case 1: return "ожидаем "; break;
                    case 1: return "отказ "; break;
                    default: return "новая"; break;
                }
            },
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

            },
            section:async function(){
                if(this.section==0)
                {
                    var r=await axios.get("/eventStat")
                    this.stat=r.data;
                }
                if(this.section==3)
                {
                    var r=await axios.get("/records")
                    this.records=r.data.files;
                    this.diskSpace=r.data.diskSpace;
                }


            }

        },
        mounted: async function () {
            let r = await axios.get("/event");
            this.events = (r.data.sort((a, b) => {

                return moment(a.date).unix() - moment(b.date).unix()
            }));
             r=await axios.get("/eventStat")
            this.stat=r.data;
             r=await axios.get("/records")
            this.records=r.data.files;
             this.diskSpace=r.data.diskSpace;

            this.updateStreams();
            console.log("readonly", readonly)
        }
    });
})();


var DMap = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 39: 39, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 50: 50, 51: 51, 52: 52, 53: 53, 54: 54, 55: 55, 56: 56, 57: 57, 58: 58, 59: 59, 60: 60, 61: 61, 62: 62, 63: 63, 64: 64, 65: 65, 66: 66, 67: 67, 68: 68, 69: 69, 70: 70, 71: 71, 72: 72, 73: 73, 74: 74, 75: 75, 76: 76, 77: 77, 78: 78, 79: 79, 80: 80, 81: 81, 82: 82, 83: 83, 84: 84, 85: 85, 86: 86, 87: 87, 88: 88, 89: 89, 90: 90, 91: 91, 92: 92, 93: 93, 94: 94, 95: 95, 96: 96, 97: 97, 98: 98, 99: 99, 100: 100, 101: 101, 102: 102, 103: 103, 104: 104, 105: 105, 106: 106, 107: 107, 108: 108, 109: 109, 110: 110, 111: 111, 112: 112, 113: 113, 114: 114, 115: 115, 116: 116, 117: 117, 118: 118, 119: 119, 120: 120, 121: 121, 122: 122, 123: 123, 124: 124, 125: 125, 126: 126, 127: 127, 1027: 129, 8225: 135, 1046: 198, 8222: 132, 1047: 199, 1168: 165, 1048: 200, 1113: 154, 1049: 201, 1045: 197, 1050: 202, 1028: 170, 160: 160, 1040: 192, 1051: 203, 164: 164, 166: 166, 167: 167, 169: 169, 171: 171, 172: 172, 173: 173, 174: 174, 1053: 205, 176: 176, 177: 177, 1114: 156, 181: 181, 182: 182, 183: 183, 8221: 148, 187: 187, 1029: 189, 1056: 208, 1057: 209, 1058: 210, 8364: 136, 1112: 188, 1115: 158, 1059: 211, 1060: 212, 1030: 178, 1061: 213, 1062: 214, 1063: 215, 1116: 157, 1064: 216, 1065: 217, 1031: 175, 1066: 218, 1067: 219, 1068: 220, 1069: 221, 1070: 222, 1032: 163, 8226: 149, 1071: 223, 1072: 224, 8482: 153, 1073: 225, 8240: 137, 1118: 162, 1074: 226, 1110: 179, 8230: 133, 1075: 227, 1033: 138, 1076: 228, 1077: 229, 8211: 150, 1078: 230, 1119: 159, 1079: 231, 1042: 194, 1080: 232, 1034: 140, 1025: 168, 1081: 233, 1082: 234, 8212: 151, 1083: 235, 1169: 180, 1084: 236, 1052: 204, 1085: 237, 1035: 142, 1086: 238, 1087: 239, 1088: 240, 1089: 241, 1090: 242, 1036: 141, 1041: 193, 1091: 243, 1092: 244, 8224: 134, 1093: 245, 8470: 185, 1094: 246, 1054: 206, 1095: 247, 1096: 248, 8249: 139, 1097: 249, 1098: 250, 1044: 196, 1099: 251, 1111: 191, 1055: 207, 1100: 252, 1038: 161, 8220: 147, 1101: 253, 8250: 155, 1102: 254, 8216: 145, 1103: 255, 1043: 195, 1105: 184, 1039: 143, 1026: 128, 1106: 144, 8218: 130, 1107: 131, 8217: 146, 1108: 186, 1109: 190}

function UnicodeToWin1251(s) {
    var L = []
    for (var i=0; i<s.length; i++) {
        var ord = s.charCodeAt(i)
        if (!(ord in DMap))
            throw "Character "+s.charAt(i)+" isn't supported by win1251!"
        L.push(String.fromCharCode(DMap[ord]))
    }
    return L.join('')
}
