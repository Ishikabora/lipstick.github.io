nose_X = 0;
nose_Y = 0;

function preload()
{
    clown_nose = loadImage('lips.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x-20;
        nose_Y = results[0].pose.nose.y+18;
        console.log("Nose x =" + nose_X);
        console.log("Nose y =" + nose_Y);
    }
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(clown_nose, nose_X, nose_Y, 40, 40);
}

function take_snapshot()
{
    save('my_filter_image');
}