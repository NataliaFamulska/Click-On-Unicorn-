let buttonClick = document.getElementById("clickerButton");
let appearingElement = document.getElementById("twoMore");
let buttonPlusTwo = document.getElementById("addTwo");
let costInfo = document.getElementById("costInfo");
let addValue = 1;
let value = 1;
let cost = 5;
let count = 0;

function click() {
  
  buttonClick.innerText = value;
  value+=addValue; 
  
  if(appearingElement.classList.contains("nonVisible") && value == 10) {
    appearingElement.classList.remove("nonVisible");
    appearingElement.classList.toggle("visible");
  } 
}

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
}

 buttonPlusTwo.addEventListener("click", valueTwoMore);
 buttonClick.addEventListener("click", click);



