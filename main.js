function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(600,600);
    video.position(120,100);
    canvas = createCanvas(550,500);
    canvas.position(820,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotResults);
}

function draw(){
    background("white");
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}