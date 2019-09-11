//  basic 
let buttonClick = document.getElementById("clickerButton");
let displayValue = document.getElementById("addValue");
// numbers
let addValue = 1;
let value = 1;
let count = 0;
// appearing elements plus2
let appearingElement = document.getElementById("twoMore");
let buttonPlusTwo = document.getElementById("addTwo");
let costInfo = document.getElementById("costInfo");
let cost = 5;
//apearing elements plus5
let appearingElementFive = document.getElementById("fiveMore");
let buttonPlusFive = document.getElementById("addFive");
let costInfoFive = document.getElementById("costInfoFive");
let costFive = 10;


// main function
function click() {
  
  buttonClick.innerText = value;
  value+=addValue; 
  displayValue.innerText = "You add " + addValue;
  
  if(appearingElement.classList.contains("nonVisible") && value == 10) {
    appearingElement.classList.remove("nonVisible");
    appearingElement.classList.toggle("visible");
  }
  else if(appearingElementFive.classList.contains("nonVisible") && value == 50) {
    appearingElementFive.classList.remove("nonVisible");
    appearingElementFive.classList.toggle("visible");
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
  
  displayValue.innerText =  "You add " + addValue;
}

//function plus 5
function valueFiveMore() {
  
  if(value > costFive){
    
   value-=costFive;
   addValue+=5;
   costFive+=10;
    
   buttonClick.innerText = value;

   costInfoFive.innerText = "It's cost " + costFive;
    
  }
  
  displayValue.innerText =  "You add " + addValue;
}


//events
 buttonPlusTwo.addEventListener("click", valueTwoMore);
 buttonPlusFive.addEventListener("click", valueFiveMore);
 buttonClick.addEventListener("click", click);





