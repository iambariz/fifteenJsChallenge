const closeBtn = document.getElementById("closeButton");
const menu = document.getElementById("nav-bar");
const openBtn = document.getElementById("openButton");

openBtn.addEventListener('click', function(){
    menu.classList.toggle('open');
})

closeBtn.addEventListener('click', function(){
    menu.classList.toggle('open');
})