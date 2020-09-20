var numSquare = 6;
var color = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var  colorDisplay = document.getElementById("rgb");
var messageDisplay =document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
init();
function init(){
	for(var i=0;i<modeButton.length;i++){
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
			reset();
		});
	}	
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color[i];
		square[i].addEventListener("click",function(){
			var clickedColor =this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again";
			}
			else{
				this.style.backgroundColor ="#232323";
				messageDisplay.textContent = "Try Again";

			}

		});
	}
	reset();
}
function reset(){
	color = generateRandomColor(numSquare);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++){
		if(color[i]){
			square[i].style.display="block";
			square[i].style.backgroundColor=color[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";
	resetButton.textContent="New Colors";	


}

resetButton.addEventListener("click",function(){
	reset();
});

function changeColor(color){
	for(var j=0;j<square.length;j++){
		square[j].style.backgroundColor=color;
	}
}
function randomColor(){
	var random =Math.floor(Math.random() *color.length);
	return color[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0;i<num;i++){
		arr.push(ColorGenerator());
	}
	return arr;
}
function ColorGenerator(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
function modeButton(){
	for(var i=0;i<modeButton.length;i++){
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
			reset();
		});
	}	

}