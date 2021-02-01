img="";
status="";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
}

function draw(){
    image(img,0,0,500,400);

    fill("#FF0000");
    text("Dog",100,60);
    stroke("#FF0000");
    noFill();
    rect(100,65,250,300);
    
    text("Cat",270,70);
    rect(230,80,250,300);
}

function modelloaded(){
    console.log("Model has been loaded");
    status="True";
    document.getElementById("status").innerHTML="Status : Detecting objects";
    objectdetector.detect(img,gotresults);
}

function gotresults(error,results) {
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
    }
}