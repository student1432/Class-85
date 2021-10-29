rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";
rover_image = "rover.png"
Img = ["Nasa_img_1.jpg", "Nasa_img_2.jpg", "Nasa_img_3.jpg", "Nasa_img_4.jpg"];
random_Number = Math.floor(Math.random()*4);
background_image = Img[random_Number];
console.log("background_image = " + background_image);

rover_x = 10;
rover_y = 10;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() 
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadrover()
 {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    
    {
       up();
       console.log("up")
    }
    if(keyPressed == '40')
    {
       down();
       console.log("down")
    }
    if(keyPressed == '37')
    {
       left();
       console.log("left")
    }
    if(keyPressed == '39')
    {
       right();
       console.log("right")
    }
}
function up()
{
   if(rover_y >= 0)
   {
      rover_y = rover_y - 10;
      console.log("When Up Arrow  key is pressed = " + rover_y + rover_x);
      uploadBackground();
      uploadrover();

   }
}
function down()
{
   if(rover_y <= 500)
   {
      rover_y = rover_y + 10;
      console.log("When down Arrow  key is pressed = " + rover_y + rover_x);
      uploadBackground();
      uploadrover();

   }
}
function left()
{
   if(rover_x >= 0)
   {
      rover_x = rover_x - 10;
      console.log("When left Arrow  key is pressed = " + rover_y + rover_x);
      uploadBackground();
      uploadrover();

   }
}
function right()
{
   if(rover_x <= 700)
   {
      rover_x = rover_x + 10;
      console.log("When left Arrow  key is pressed = " + rover_y + rover_x);
      uploadBackground();
      uploadrover();

   }
}