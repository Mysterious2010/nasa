canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasa_array=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG"];
random_number=Math.floor(Math.random()*3);
background_image=nasa_array[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10
function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
rover_imgTag= new Image();
rover_imgTag.onload=uploadRover;
rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "40"){
        down();
        console.log("down");
    }
    if(keypressed == "37"){
        left();
        console.log("left");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){

rover_y=rover_y-10;
console.log("When up arrow is pressed,x="+ rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();
    }
}
function down(){
    if(rover_y<=500){

rover_y=rover_y+10;
console.log("When up down arrow is pressed,x="+ rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();
    }
}

function left(){
    if(rover_x>=0){

rover_x=rover_x-10;
console.log("When left arrow is pressed,x="+ rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();
    }
}
function right(){
    if(rover_x<=700){

rover_x=rover_x+10;
console.log("When right arrow is pressed,x="+ rover_x+"|y="+rover_y);
uploadBackground();
uploadRover();
    }
}