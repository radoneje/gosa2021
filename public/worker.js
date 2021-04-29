var barcodeDetector;
init();
async function init(){

}

onmessage = async function(e) {
    console.log('Message received from main script', e.data);
    switch(e.data[0]){
        case "detectPhoto":{detectPhoto(e.data)}
    }
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('Posting message back to main script');
    postMessage(123);
}
async  function detectPhoto(data) {
    console.log("startStream", data[1]);

    var barcodes=await barcodeDetector.detect(URL.createObjectURL(data[1]))
    //console.log("barcodes", barcodes);
    //barcodes.forEach(barcode => console.log(barcode.rawData));
}