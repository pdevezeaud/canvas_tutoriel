const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 45;

function drawGame(){
    console.log("draw");
    requestAnimationFrame(drawGame);
    clearScreen();
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

function drawGreenBlob() {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill()
    ctx.closePath();
}

//drawGame(); 1856   https://www.youtube.com/watch?v=UUFPEgRKwf4&t=60s
