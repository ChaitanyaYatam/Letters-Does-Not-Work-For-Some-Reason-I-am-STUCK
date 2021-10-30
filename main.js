


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {
	canvas=document.getElementById("myCanvas");
	canvas.drawImage(img_imgTag, img_x, img_y, img_width, img_height);

}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey(
				document.getElementById("d1").innerHTML="You Pressed Alphabet Key"
			)
			}

		if (keyPressed >=48 && keyPressed<=57) {
			numberkey(
				document.getElementById("d1").innerHTML="You Pressed Number Key"
			)
		} 
			
		if (keyPressed >=37 && keyPressed<=40) {
			arrowkey(
				document.getElementById("d1").innerHTML="You Pressed Arrow Key"
			)
	       } 

		   if (keyPressed == 17 && keyPressed == 18 && keyPressed == 16 ) {
			specialkey(
				document.getElementById("d1").innerHTML="You Pressed Special Key"
			)
		   
			}

			


		
		
			
	
			
		}
		
		
	



function aplhabetkey()
{
	img_image="alpkey.png"
	add()

}
function numberkey()
{
	img_image="numkey.png"
	add()
}
function arrowkey()
{
	img_image="arrkey.png"
	add()
}
function specialkey()
{
	img_image="spkeykey.png"
	add()
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
