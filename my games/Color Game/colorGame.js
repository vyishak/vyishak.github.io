var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".squar");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
        } 
         else {
        squares[i].style.display = "none";
    }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function(){
    messageDisplay.textContent = "";
    // generate all new colors
    colors = generateRandomColors(numSquares);
     // pick a new random color from array
    pickedColor = pickColor();
     // change color Display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to sqares
    squares[i].addEventListener("click", function(){
        // grab colors of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare clicked color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct :)";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "play Again ?";
        } 
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again :(";
        }
    });
}


function changeColor(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    
}

function generateRandomColors(num){
    // create an empty array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++) {
        // get random colors and push into array
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}





















