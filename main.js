function setup(){
    video = createCapture(VIDEO);
    video.size(640,480);
    video.position(10,150);

    canvas = createCanvas(640, 480);
    canvas.position(160,150130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function preload(){

}

function modelLoaded(){
    console.log("PoseNet is initialized")
}

function draw(){
    background("#808080");
}

function gotPoses(results) 
{
        if(results.length > 0)
        {
            console.log(results);
        }

}