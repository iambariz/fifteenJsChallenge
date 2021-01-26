const reviews = [{
        id: 1,
        name: "Michael Scott",
        img: "images/michael.jpg",
        job: "Branch Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
        id: 2,
        name: "Ryan Howard ",
        img: "images/ryan.jpg",
        job: "Accountant",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    },
    {
        id: 3,
        name: "Jenice Jackson",
        img: "images/jenice.jpg",
        job: "Deputy Branc Manager",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    },
    {
        id: 4,
        name: "Joanne Doe",
        img: "images/joanne.jpg",
        job: "Janitor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    },
]

const img = document.getElementById("person-image");
const author = document.getElementById("name");
const job = document.getElementById("position");
const info = document.getElementById("description");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const resetBtn = document.querySelector("#reset-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    console.log("asd");
    if (currentItem === reviews.length - 1) {
        currentItem = 0;
    } else {
        currentItem++;
    }

    showPerson(currentItem);
})

prevBtn.addEventListener('click', function () {
    if (currentItem === 0) {
        currentItem = reviews.length - 1;
    } else {
        currentItem--;
    }
    showPerson(currentItem);
})

resetBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * (reviews.length));
    showPerson(currentItem);
})