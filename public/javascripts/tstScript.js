let cameraFrame;
const segmentationThreshold = 0.5;
var img = new Image();
var img2 = new Image();
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.cancelAnimationFrame = (function(){
    return  window.cancelAnimationFrame || window.mozCancelAnimationFrame;
})();

document.addEventListener("DOMContentLoaded",  async ()=>{

   // Создает новый элемент изображения
    let canvas=document.getElementById('mainCanvas');
    canvas.width=640;
    canvas.height=360
    var ctx = document.getElementById('mainCanvas').getContext('2d');

    var stream = await navigator.mediaDevices.getUserMedia({video:{width:640, height:360}, audio:true});
    var video=document.getElementById('mainVideo');
    video.srcObject=stream;
    video.muted=true;
    video.width=640;
    video.height=360;
    video.onloadeddata=async ()=>{await startVideo(video, canvas);}
    video.play();



    img.addEventListener("load", async function() {
        // здесь выполняет drawImage функцию
        const elem = document.createElement('canvas');
        elem.width = 640;
        elem.height=360;
        elem.getContext('2d').drawImage(img,0,0, 640, 360);
        elem.toBlob((blob)=>{
            img2.src=URL.createObjectURL(blob);
            img2.width=640;
            img2.height=360;
            document.body.appendChild(img2);
        });

        //(blob=>{
          //  img=blob;
        //})
        //ctx.drawImage(img,0,0, 640, 360);

    }, false);
    img.src = '/images/conf.png';


});
async function startVideo(video, canvas) {
    console.log("startVideo 1")
    let objNet=await bodyPix.load({
        architecture: 'MobileNetV1',//'ResNet50',//'MobileNetV1',
        outputStride: 16,
       // multiplier: 1,
        quantBytes: 2
    })
    var ctx = document.getElementById('mainCanvas').getContext('2d');
    cameraFrame = detectBody(objNet, ctx);
    console.log("startVideo 2")
}
function detectBody(net, ctx){
    console.log("det body")
    let personSegmentation=  net.segmentPerson(mainVideo,  {
        flipHorizontal: false,
        internalResolution: 'medium',
        segmentationThreshold: segmentationThreshold
    })
        .catch(error => {
            console.log(error);
        })
        .then(personSegmentation => {
            if(personSegmentation!=null){
                drawBody(personSegmentation, ctx);
            }
        });
    cameraFrame = requestAnimFrame(()=>{detectBody(net, ctx)});
}
function drawBody(personSegmentation,ctx) {
    console.log("db");
    const maskBackground = true;
// Convert the segmentation into a mask to darken the background.
    const foregroundColor = {r: 0, g: 0, b: 0, a: 0};
    const backgroundColor = {r: 0, g: 255, b: 0, a: 255};
    const backgroundDarkeningMask = bodyPix.toMask(
        personSegmentation, foregroundColor, backgroundColor);
    console.log(backgroundDarkeningMask);
    const opacity = 1;//0.7;
    const maskBlurAmount = 10;
    const flipHorizontal = false;
    const canvas = document.getElementById('mainCanvas');
// Draw the mask onto the image on a canvas.  With opacity set to 0.7 and
// maskBlurAmount set to 3, this will darken the background and blur the
// darkened background's edge.
    bodyPix.drawMask(
        canvas, mainVideo, backgroundDarkeningMask, opacity, maskBlurAmount, flipHorizontal);

  /*  ctx.drawImage(img, 0, 0, 640, 360);
    var bgData =ctx.getImageData(0,0, 640, 360);
    ctx.drawImage(mainVideo, 0, 0, 640, 360);
    var imageData =ctx.getImageData(0,0, 640, 360);
    var pixel = imageData.data;
    var pxbg=bgData.data;
    for (var p = 0; p<pixel.length; p+=4)
    {
        //console.log(personSegmentation.data[p/4]);
        if (personSegmentation.data[p/4] == 0) {
            //pixel[p+3] = 0;
            pixel[p]=pxbg[p];
            pixel[p+1]=pxbg[p+1];
            pixel[p+2]=pxbg[p+2];
            pixel[p+3]=pxbg[p+3];
        }
    }
    ctx.imageSmoothingEnabled = true;
    ctx.putImageData(imageData,0,0);*/

}