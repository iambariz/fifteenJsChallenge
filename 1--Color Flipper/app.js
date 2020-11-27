const hex = [
"a", "b", "c", "d", "e",
"f", "0", "1", "2", "3",
"4", "5", "6", "7", "8", 
"9",
]

const colorId = document.getElementById("colorId");
const mainDiv = document.getElementById("main");
const hexOption = document.getElementById("Hex");
const rgbOption = document.getElementById("Rgb");
const button = document.getElementById("button");
const rgbRadio = document.getElementById("rgbRadio");
const hexRadio = document.getElementById("hexRadio");

button.addEventListener('click', makeItColorful);

hexOption.addEventListener('click', function(){
    toggle(rgbRadio, hexRadio);
})

rgbOption.addEventListener('click', function(){
    toggle(hexRadio, rgbRadio);
})

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getHex(){
    let hexValue = "#";
    for(let i=0; i < 6; i++){
        let randomNum = getRandom(0,15);
        hexValue += hex[randomNum];
    }
    setColor(hexValue);
}

function getRgb(){
    let rgbValue = []
    for(let i=0; i < 3; i++){
        let generate = getRandom(0,255);
        rgbValue.push(generate);
    }
    function getDone(){
        rgbValue.splice(0, 0, 'rgb');
        rgbValue.splice(1, 0, '(');
        rgbValue.splice(3, 0, ',');
        rgbValue.splice(5, 0, ',');
        rgbValue.splice(7, 0, ')');
    }
    getDone();
    rgbValue = rgbValue.join("");
    setColor(rgbValue);
}

function setColor(colorCode){
    document.body.style.backgroundColor = colorCode;
    colorId.textContent = colorCode;
}

function makeItColorful(){
    if(rgbOption.checked === true){
        getRgb();
    }
    if(hexOption.checked === true){
        getHex();
    }
}

function toggle(off, on){
   off.classList.remove("selected");
   on.classList.add("selected");
}