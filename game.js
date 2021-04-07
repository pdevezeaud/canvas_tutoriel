const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 45;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


//function principal 
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    drawGreenBlob();
    inputs();
    boundryCheck();
}

//requestAnimationFrame(function)
//setInterval(drawGame,1000)

function boundryCheck(){
  
}

//remet image de fond en black(rectangle)
function clearScreen(){
    //colorisation du context en black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}


//ecoute appui touche
document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);



function keyDown(event) {
    //up
    if (event.keyCode == 38) {
      upPressed = true;
    }
  
    //down
    if (event.keyCode == 40) {
      downPressed = true;
    }
    //left
    if (event.keyCode == 37) {
      leftPressed = true;
    }
  
    //right
    if (event.keyCode == 39) {
      rightPressed = true;
    }
  }


function keyUp(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = false;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = false;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = false;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = false;
  }
}


//creation ball
function drawGreenBlob() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill()
    ctx.closePath();
}

function inputs() {
    if (upPressed) {
      y = y - speed;
    }
    if (downPressed) {
      y = y + speed;
    }
    if (leftPressed) {
      x = x - speed;
    }
    if (rightPressed) {
      x = x + speed;
    }
  }



drawGame(); 

//1856   https://www.youtube.com/watch?v=UUFPEgRKwf4&t=60s
