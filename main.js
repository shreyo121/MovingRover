canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width=100;
rover_height=100;
backgroundimage="mars.jpg";
roverimage="rover.png";
roverxposition=50;
roverypostition=50;
function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=backgroundimage;
rover_imgtag=new Image();
rover_imgtag.onload=uploadroverimage;
rover_imgtag.src=roverimage;
}
function uploadbackground(){
ctx.drawImage(background_imgtag,0,0,1000,800)
}
function uploadroverimage(){
ctx.drawImage(rover_imgtag,roverxposition,roverypostition,100,200)
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed)
if (keypressed=="37"){
console.log("left");
left();
}
if (keypressed=="38"){
    console.log("up");
    up();
}
if (keypressed=="39"){
    console.log("right");
    right();
}
if (keypressed=="40"){
    console.log("down");
    down();}
} 
function up(){
if (roverypostition>=10){roverypostition=roverypostition-10;
    uploadbackground()
    uploadroverimage()
}
}
function down(){
    if (roverypostition<630){roverypostition=roverypostition+10;
    uploadbackground()
    uploadroverimage()
}
}
function left(){
    if (roverxposition>=10){roverxposition=roverxposition-10
       uploadbackground()
    uploadroverimage(
    )
}
}
function right(){
    if (roverxposition<=900){roverxposition=roverxposition+10
    uploadbackground()
    uploadroverimage()
}
}