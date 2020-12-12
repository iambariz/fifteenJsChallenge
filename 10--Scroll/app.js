const closeBtn = document.querySelector(".fas.fa-times");
const openBtn = document.querySelector(".fas.fa-bars");
const navbar = document.querySelector(".nav-ul");

toggleOpen = () => {
    console.log("asd")
    navbar.classList.toggle("open");
    closeBtn.classList.toggle("open");
    console.log(closeBtn.classList);
}

openBtn.addEventListener('click', toggleOpen);
openBtn.addEventListener('click', toggleOpen);




