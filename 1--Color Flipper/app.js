const hex = [
"a", "b", "c", "d", "e",
"f", "0", "1", "2", "3",
"4", "5", "6", "7", "8", 
"9",
]

const colorId = document.getElementById("colorId");
const mainDiv = document.getElementById("main");


function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


function getHex(){
    var hexValue = "#";
    for(let i=0; i < 6; i++){
        let randomNum = getRandom(0,15);
        hexValue += hex[randomNum];
    }
    console.log(hexValue);
    document.body.style.backgroundColor = hexValue;
    console.log(hexValue);
}

getHex();