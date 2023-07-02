var numSqares = 21;
var colors = [];
var pickedColor;
var sqares = document.querySelectorAll(".sqare");
var rgbcolors = document.getElementById("rgbcolor");
var messageDisplay = document.querySelector("#message");
var help = document.querySelector(".helpMode");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
  setupModeButtons();
  setupSqares();
  reset();
  //GameHelp();
}


function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSqares = 7 : (this.textContent === "Hard" ? numSqares = 14 : numSqares = 21);
      reset();
    });
  }
}





function setupSqares() {
  for (var i = 0; i < sqares.length; i++) {
    sqares[i].addEventListener("click", function () {
      var clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}



function reset() {
  colors = generateRandomColors(numSqares);
  pickedColor = pickColor();
  rgbcolors.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  for (var i = 0; i < sqares.length; i++) {
    if (colors[i]) {
      sqares[i].style.display = "block"
      sqares[i].style.background = colors[i];
    } else {
      sqares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
})


function GameHelp() {

}




function changeColors(color) {
  for (var i = 0; i < sqares.length; i++) {
    sqares[i].style.background = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}



function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
