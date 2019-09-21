// buttons
const addingToValueButton = document.getElementById("addingToValueButton");
const addTwo = document.getElementById("addTwo");
const addFive = document.getElementById("addFive");

//number
let vaule = 1;
let addToValue = 1;

// text
let displayAddedValue = document.getElementById("displayAddedValue");
let infoAboutCostButton2 = document.getElementById("costInfo2");
let infoAboutCostButton5 = document.getElementById("costInfo5");

// appearing
const coin2 = document.getElementById("coin2");
const coin5 = document.getElementById("coin5");

// functions
function chceckDisplayClass(coin) {
    if(coin.classList.contains("nonVisible") && value > 10) {
        coin.classList.remove("nonVisible");
      }
}

function increaseAddingValue(numerToAdd, cout){
    cost = Math.round(cout * numerToAdd / addValue);
    value-=cost;
    addValue+=numerToAdd;
    cout ++;
}

function incrementValue() { 
    addingToValueButton.innerText = value;
    value+=addValue; 
    displayValue.innerText = "You adding " + addValue;

    chceckDisplayClass(coin2);
    chceckDisplayClass(coin5);
}

// events
addingToValueButton.addEventListener("click", incrementValue());
addTwo.addEventListener("click", increaseAddingValue(2, 5));
