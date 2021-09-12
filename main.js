noseX=0;
noseY=0;
eyesX=0;
eyesY=0;
function preload(){
  mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  goggle=loadImage('https://i.postimg.cc/Fz2hVY39/tilak-png-3-removebg-preview.png')
}
function setup(){
    canvas=createCanvas(500,450)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,450);
    tint(245, 187, 154);
    video.hide();

  
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model loaded!!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x -40;
        noseY=results[0].pose.nose.y +5;
        eyesX=results[0].pose.nose.x -10;
        eyesY=results[0].pose.nose.y -80;

        console.log("Nose X = "+ results[0].pose.nose.x);
        console.log("Nose Y = "+ results[0].pose.nose.y);

    }

}
function draw(){
 image(video,0,0,500,450);
 image(mustache,noseX,noseY,80,30);
 image(goggle,eyesX,eyesY,20,40);
 
}
function take_snapshot(){
    save('ImageWithfilter.png');


}