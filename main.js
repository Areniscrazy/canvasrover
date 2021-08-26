canvas=document.getElementById("myCanvas");
hi=canvas.getContext("2d");
roverwidth=100;
roverheight=100;
roverx=10;
rovery=10;
backroundrover="mars.jpg";
rovermars="rover.png";

function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload= uploadBackground();
    background_imgTag.src =backroundrover;

    rover_imgTag = new Image(); 
    rover_imgTag.onload= uploadrover();
    rover_imgTag.src =rovermars;





}


function uploadBackground() {
    hi.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
    }
    
    
    
    function uploadrover() {
        hi.drawImage(rover_imgTag,roverx,rovery, roverwidth, roverheight);
        }  