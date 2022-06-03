song="";
status="";
objects=[];

function preload(){
    song=loadSound("alert.mp3");
}

function setup(){
    canvas=createCanvas(380,380);    
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}

function draw(){
    image(video,0,0,380,380);
    if(status != ""){
        objectDetector.detect(video,gotResults);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status : Objects Detected";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if(object[i].label=="person"){
                document.getElementById("bs").innerHTML="Baby Found";
                song.stop();
            }
            else{
                document.getElementById("bs").innerHTML="Baby Not Found";
                song.play();
            }
        }
        if(objects.length==0){
            document.getElementById("bs").innerHTML="Baby Not Found";
            song.play();
        }
    }
}

function modelloaded(){
    console.log("cocossd is initialized");
    status=true;
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }

}