//  basic 
const buttonClick = document.getElementById("clickerButton");
const displayValue = document.getElementById("addValue");
// numbers
let addValue = 1;
let value = 1;
let count = 0;
// appearing elements plus2
const appearingElement = document.getElementById("twoMore");
const buttonPlusTwo = document.getElementById("addTwo");
const costInfo = document.getElementById("costInfo");
let cost = 5;
//apearing elements plus5
const appearingElementFive = document.getElementById("fiveMore");
const buttonPlusFive = document.getElementById("addFive");
const costInfoFive = document.getElementById("costInfoFive");
let costFive = 10;


// main function
function click() {
  
  buttonClick.innerText = value;
  value+=addValue; 
  displayValue.innerText = "You adding " + addValue;
  
  if(appearingElement.classList.contains("nonVisible") && value > 10) {
    appearingElement.classList.remove("nonVisible");
  }
  else if(appearingElementFive.classList.contains("nonVisible") && value > 50) {
    appearingElementFive.classList.remove("nonVisible");
  }
}

//function plus2
function valueTwoMore() {
  
  if(value > cost){
    
   value-=cost;
    
   if(cost <= 6) {
    addValue+=1;
    }
    
   else { 
    addValue+=2;
   }
    
   buttonClick.innerText = value;
   cost+=10;
   costInfo.innerText = "It's cost " + cost;
    
  }
  
  displayValue.innerText =  "You adding " + addValue;
}

//function plus 5
function valueFiveMore() {
  
  if(value > costFive){
    
   value-=costFive;
   addValue+=5;
    
   buttonClick.innerText = value;
    
   costFive+=10;
    
   costInfoFive.innerText = "It's cost " + costFive;
    
  }
  
  displayValue.innerText =  "You adding " + addValue;
}


//events
 buttonPlusTwo.addEventListener("click", valueTwoMore);
 buttonPlusFive.addEventListener("click", valueFiveMore);
 buttonClick.addEventListener("click", click);



