const buttons = document.querySelectorAll(".tab-btn");
const displayItems = document.querySelectorAll(".tab-item");

console.log(displayItems);

buttons.forEach(item => {
    item.addEventListener('click', e => {
        if(e.currentTarget.dataset.id == "one"){
            //console.log(`${e.currentTarget.dataset.id}`);
            toDisplay(displayItems[0], displayItems[1], displayItems[2])
        }
        if(e.currentTarget.dataset.id == "two"){
            //console.log(`${e.currentTarget.dataset.id}`);
            toDisplay(displayItems[1], displayItems[2], displayItems[0])
        }
        if(e.currentTarget.dataset.id == "three"){
            //console.log(`${e.currentTarget.dataset.id}`);
            toDisplay(displayItems[2], displayItems[1], displayItems[0])
        }
    })
})


toDisplay = (add, ...args) => {
    add.classList.add("open");
    args.forEach(element => {
        element.classList.remove("open");
        //console.log(element);
    });
}