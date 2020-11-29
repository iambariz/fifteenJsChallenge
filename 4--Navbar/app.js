const togglerBtn = document.getElementById("toggler");
const menu = document.getElementById("nav-list-toggle");

togglerBtn.addEventListener('click', function(){
    menu.classList.toggle('open');
})