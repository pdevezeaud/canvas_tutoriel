const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 45;

let downPressed = false;


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
    //down
    if(event.keyCode == 40) {
        downPressed = true;
    }
}


function keyUp(event) {
    //up
    if(event.keyCode == 38) {
        downPressed = false;
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
    if(downPressed == true){
        y= y + 10;
    }
}






drawGame(); 

//1856   https://www.youtube.com/watch?v=UUFPEgRKwf4&t=60s
