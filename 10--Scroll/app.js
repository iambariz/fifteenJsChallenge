//Sections
const home = document.querySelector("#home");
const about = document.querySelector("#About");
const services = document.querySelector("#Services");
const tours = document.querySelector("#Tours");

//Navbar 
const navContainer = document.querySelector(".navbar")
const closeBtn = document.querySelector(".fas.fa-times");
const openBtn = document.querySelector(".fas.fa-bars");
const navbar = document.querySelector(".nav-ul");

//Functions
toggleOpen = () => {
    navbar.classList.toggle("open");
    closeBtn.classList.toggle("open");
}

//Even listeners

openBtn.addEventListener('click', toggleOpen);
openBtn.addEventListener('click', toggleOpen);

window.addEventListener("scroll", ()=>{
    let windowVar = window.pageYOffset;
    if(home.offsetTop + 100 <= windowVar){
        navContainer.classList.add("scrolled");
    }
    else{
        navContainer.classList.remove("scrolled");
    }
});






