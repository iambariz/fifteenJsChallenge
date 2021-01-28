//Selectors

const notiBar = document.querySelector('.notification-msg');
const textField = document.querySelector('#grocery');
const button = document.querySelector('.btn-submit');
const itemsContainer = document.querySelector('.items');
const clearBtn = document.querySelector('.clear-btn');

let edit = false;
let items = [];

//Event listeners
button.addEventListener('click', function (e) {
    e.preventDefault();
});
button.addEventListener('click', makeItem);

clearBtn.addEventListener('click', clearItems);

//Functions

function makeItem() {
    if (textField.value.length > 0) {
        //Create & add classes
        let item = document.createElement("div");
        //Set data ID
        const attr = document.createAttribute("data-id");
        const id = new Date().getTime().toString();
        attr.value = id;
        item.setAttributeNode(attr);
        //Continue creating
        item.classList.add('item');
        let paragraph = document.createElement("p");
        paragraph.textContent = textField.value;
        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add('buttons');
        let editBtn = document.createElement("i");
        editBtn.classList.add('fas', 'fa-user-edit');
        let delBtn = document.createElement("i");
        delBtn.classList.add('fas', 'fa-trash-alt');
        //Append
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(delBtn);
        item.appendChild(paragraph);
        item.appendChild(buttonDiv);
        itemsContainer.appendChild(item);
        //Push into an array
        items.push(item);
        console.log(items);
        //Display msg
        textField.value = "";
        displayAlert("Item added", "green");
        displayButton();
    } else {
        displayAlert("Please enter a name", "red");
        textField.value = "";
    }
}

function displayAlert(msg, color) {
    notiBar.style.opacity = "1.0";
    notiBar.textContent = msg;
    if (color == "red") {
        notiBar.classList.add("red");
    } else {
        notiBar.classList.add("green");
    }
    setTimeout(function () {
        notiBar.style.opacity = "0.0";
    }, 2000);
    setTimeout(function () {
        notiBar.textContent = "";
    }, 2800)
}

function displayButton() {
    if (items.length > 0) {
        clearBtn.style.display = "inline";
    } else {
        clearBtn.style.display = "none";
    }
}

function clearItems() {

    let delItem = document.querySelectorAll(".item");

    if (items.length > 0) {
        delItem.forEach(function (item) {
            itemsContainer.removeChild(item);
        })
    }
    displayButton();
}


function deleteItem(dataId) {
    document.querySelectorAll()
}