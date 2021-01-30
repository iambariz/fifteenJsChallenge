//Selectors

const items = document.querySelectorAll('.slide-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.previous');
//console.log(items);

nextButton.addEventListener('click', slideUp);
prevButton.addEventListener('click', slideDown);

//Additional variables
let i = 0;

function slideUp() {
    i++;
    items.forEach(function (item) {
        item.style.transform = "translateX(" + i + "00%)";
    });
    buttonDisplay();
}

function slideDown() {
    i--;
    items.forEach(function (item) {
        item.style.transform = "translateX(" + i + "00%)";
    });
    buttonDisplay();
}

function buttonDisplay() {
    switch (i) {
        case 0:
            prevButton.style.display = "none";
            break;
        case 1:
            prevButton.style.display = "inline";
            break;
        case 2:
            nextButton.style.display = "inline";
            break;
        case 3:
            nextButton.style.display = "none";
            break;
    }
}