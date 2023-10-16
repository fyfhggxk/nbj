Objects = [];
status = "";
function preload(){
    video = createVideo('como.mp4');
}

function setup() {
    canvas = CreateCanvas(480, 380);
    canvas.center();
    video.hide();

}

function start(){
    video.loop();
    video.speed(1);
    video.volumen(0); 
}

function draw(){
    imagen(video, 0, 0, 480, 380);
}