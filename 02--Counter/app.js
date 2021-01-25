let counterDisplay = document.querySelector("#counterDisplay");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);

let count = 0;

function updateCounter(){
    counterDisplay.textContent = count;
}

function increase(){
    count++;
    updateCounter();
}

function decrease(){
    count--;
    updateCounter();
}

function reset(){
    count = 0;
    updateCounter();
}