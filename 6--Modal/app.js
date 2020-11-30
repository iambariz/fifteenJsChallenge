const button = document.getElementById("btn");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

button.addEventListener('click', function(){
    modal.classList.add('open');
})

close.addEventListener('click', function(){
    modal.classList.remove('open');
})