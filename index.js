let score = 0;
let gameTime = 0;
let gameTimer = 0;
let ufoX = 0;
let ufoY = 0;
let atomX = 0;
let atomY = 0;

window.onkeydown = handleKeys;
window.onload = startUp;

function setLeft(id, x) {
    console.log("Setting left of " + id + " to " + x);
    document.getElementById(id).style.left = x + "px";
}
function setTop(id, y) {
    console.log("Setting top of " + id + " to " + y);
    document.getElementById(id).style.top = y + "px";
}
function randomNumber(low, high) {
    return Math.floor(low + Math.random() * (1 + high - low));
}

function startUp() {
    console.log("Starting up...");
    moveAtom();
    gameTimer = window.setInterval(displayTime, 1000);
}

function displayTime() {
    gameTime++;
    document.getElementById("timeTB").innerHTML = "Time: " + gameTime;
}

function moveAtom() {
    console.log("Moving atom...");
    atomX = randomNumber(2, 16);
    atomY = randomNumber(2, 16);
    setLeft("atom", 50 * atomX);
    setTop("atom", 50 * atomY);
}

function handleKeys(event) {
    console.log("Key pressed: " + event.keyCode);

    if (event.keyCode == 37) {
        ufoX--;
    }
    if (event.keyCode == 39) {
        ufoX++;
    }
    if (event.keyCode == 38) {
        ufoY--;
    }
    if (event.keyCode == 40) {
        ufoY++;
    }
    setLeft("ufo", 50 * ufoX);
    setTop("ufo", 50 * ufoY);
    checkIfHitAtom();
}

function checkIfHitAtom() {
    console.log("Checking if hit atom...");
    if (ufoX == atomX && ufoY == atomY) {
        score++;
        document.getElementById("scoreTB").innerHTML = "Score: " + score;
        moveAtom();
        if (score == 10) {
            gameOver();
        }
    }
}

function gameOver() {
    clearInterval(gameTimer);
    alert("Well done! Your time was: " + gameTime + " seconds 🤘, click OK to play again!");
    location.reload();
}


