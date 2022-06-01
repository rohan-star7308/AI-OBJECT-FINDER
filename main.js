status="";

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    object_name=document.getElementById("input").value;
}

function modelLoaded(){
    console.log("cocossd initialized!!");
    status=true;
}

function draw(){
    image(video,0,0,380,380);
}