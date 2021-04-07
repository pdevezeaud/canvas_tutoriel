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


function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawGreenBlob();
}

//requestAnimationFrame(function)
//setInterval(drawGame,1000)



//game loop
function clearScreen(){
    //colorisation du context en black
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}


document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);



function keyDown(event) {
    //up
    if(event.keyCode == 38){
        downPressed = true;
    }
    
    //down
    if(event.keyCode == 40) {
        downPressed = true;
    }

    //left
    if(event.keycode == 37){
        downPressed = true;
    }

    //right
    if(event.keycode == 39){
        downPressed = true;
    }
}


function keyUp(event) {
    //up
    if(event.keyCode == 38){
        upPressed = false;
    }
    
    //down
    if(event.keyCode == 40) {
        upPressed = false;
    }

    //left
    if(event.keycode == 37){
        upPressed = false;
    }

    //right
    if(event.keycode == 39){
        upPressed = false;
    }

}




function drawGreenBlob() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill()
    ctx.closePath();
}

function inputs() {
    if(upPressed == true) {
        y = y - speed;
    }
    if(downPressed == true){
        y= y + speed;
    }
    if(leftPressed == true) {
        x = x - speed;
    }
    if(rightPressed == true){
        x = x + speed;
    }
}






drawGame(); 

//1856   https://www.youtube.com/watch?v=UUFPEgRKwf4&t=60s
