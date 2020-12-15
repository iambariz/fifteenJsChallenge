const buttons = document.querySelectorAll(".tab-btn");
const shit = document.querySelector("#shit");

shit.addEventListener("click", function(){
    console.log("asd");
  }); 

console.log(shit);
console.log(buttons);

buttons.forEach(item => {
    item.addEventListener('click', e => {
        console.log("asd");
        if(e.currentTarget.dataset.id == "one"){
            console.log("works");
        }
    })
})

