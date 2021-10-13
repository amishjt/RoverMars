canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

NASA_images_array=["NASA_image1.jpg","NASA_image2.jpg","NASA_image3.jpg","NASA_image4.jpg"];
random_number=Math.floor(Math.random()*4);
var rover_width= 100;
var rover_height= 100;

var rover_X= 20;
var rover_Y= 20;

var background_image=NASA_images_array[random_number];
var rover_image="rover.png";

function add(){
 background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;

rover_imgTag= new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);    
}

function uploadrover(){
ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height);    
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=="37"){
Left();
console.log("left");
}

if(keypressed=="38"){
    Up();
    console.log("up");
    }

    if(keypressed=="39"){
        Right();
        console.log("right");
        }

        if(keypressed=="40"){
            Down();
            console.log("down");
            }
}

function Right(){
if(rover_X<=700){
    rover_X=rover_X+10;
    console.log("when right arrow is pressed,X="+ rover_X+" y= "+ rover_Y);
    uploadBackground(); 
    uploadrover();
}  
}

function Left(){
if(rover_X>=0){
rover_X=rover_X-10;
console.log("when left arrow is pressed,X="+ rover_X+" y= "+ rover_Y);
    uploadBackground(); 
    uploadrover();  
}

}

function Up(){
if(rover_Y>=0){
rover_Y=rover_Y-10;
console.log("when up arrow is pressed,X="+ rover_X+" y= "+ rover_Y);
    uploadBackground(); 
    uploadrover();    
}    
}

function Down(){
if(rover_Y<=500){
rover_Y=rover_Y+10;
console.log("when down arrow is pressed,X="+ rover_X+" y= "+ rover_Y);
    uploadBackground(); 
    uploadrover();    
}    
}

