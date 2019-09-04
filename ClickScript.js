let button = document.querySelector("#clickerButton");
let text = document.querySelector("#myValue");
let value = 1;

function increaseNumber(){
		text.innerText = value;
		if(value < 10){
			value++;
		}
		else if(value >=10 && value <=100){
			value+=5;
		}
    else{
			text.innerText = "You Win!";
		}

}

clickerButton.addEventListener("click", increaseNumber);
