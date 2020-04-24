var numberOfSquares = 6;
var colors = [];
var pickedColor ;
//alternative method
//var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
     modeButtons[i].addEventListener("click", function(){
         modeButtons[0].classList.remove("selected");
         modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
         this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
                 reset();
     })
                                     
 }
}

//         if(numberOfSquares === "easy"){
//             numberOfSquares = 3;
//         } else{
//             numberOfSquares = 6; 
//         }
function setupSquares(){
    for(var i = 0; i < squares.length; i++){ 
//        squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
              messageDisplay.textContent = "Correct!!";
            resetButton.textContent = "Play again!"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
 }
}  
 
function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new colors";
    messageDisplay.textContent = " ";
    
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

//easyBtn.addEventListener("click",function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numberOfSquares = 3;
//    colors = generateRandomColors(numberOfSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if( colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//    
//})
//hardBtn.addEventListener("click",function(){
//    easyBtn.classList.remove("selected");
//    hardBtn.classList.add("selected");
//    numberOfSquares = 6;
//    colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//         
//     }
//})

//    colors = generateRandomColors(numberOfSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    this.textContent = "new colors";
//    messageDisplay.textContent = " ";
//    for(var i = 0; i < squares.length; i++){
//        squares[i].style.background = colors[i];
//    }
//    h1.style.background = "steelblue";
//
//colorDisplay.textContent = pickedColor;
//

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(i= 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
       arr.push(randomColor()) ;
    }
    return arr;
}

function randomColor(){
    var r =  Math.floor(Math.random() * 255);
    var g =  Math.floor(Math.random() * 255);
    var b =  Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}