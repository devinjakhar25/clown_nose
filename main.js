NoseX=0;
NoseY=0;



function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size( 350 , 350 );
    video.hide();

    poseNet=ml5.poseNet( video , modelloded );
    poseNet.on( 'pose' , gotposes);

}

function draw()
{
image( video , 0 ,0 , 350 , 350 );
fill( 255 , 0 , 0 ,);
stroke( 255 , 0 , 0 ,);
circle( NoseX , NoseY , 20 );
}

function modelloded()
{
    console.log("PoseNetIsInitialized");
}

function take_snapshot()
{
    save('my-clone-nose.png')
}

function gotposes(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            NoseX=results[0].pose.nose.x;
            NoseY=results[0].pose.nose.y;
            console.log( "nose x =" + results[0].pose.nose.x );
            console.log(" nose y =" + results[0].pose.nose.y );
        }
    }
