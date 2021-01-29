//Selectors

const notiBar = document.querySelector('.notification-msg');
const textField = document.querySelector('#grocery');
const button = document.querySelector('.btn-submit');
const itemsContainer = document.querySelector('.items');
const clearBtn = document.querySelector('.clear-btn');

let edit = false;
let currentTarget;
let textZone;

//Event listeners
button.addEventListener('click', function (e) {
    e.preventDefault();
});
button.addEventListener('click', makeItem);

clearBtn.addEventListener('click', clearItems);

//Functions

function makeItem(e) {
    //Edit data
    if (edit == true) {
        if (textField.value.length > 0 && textField.value.length < 16) {
            //console.log(textZone);
            //console.log(textField.value);
            currentTarget.childNodes[0].textContent = textField.value;
            //console.log(textZone);
            editId = e.currentTarget.parentElement.parentElement.dataset.id;
            edit = false;
            editLocalStorage(editId, textField.value);
            displayAlert("Edit succes", "green");
            textField.value = "";
        } else {
            displayAlert("Please enter a value between 1 - 15", "red");
            textField.value = "";
        }

    } else {
        if (textField.value.length > 0 && textField.value.length < 16) {
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
            //Event listeners
            delBtn.addEventListener('click', deleteItem);
            editBtn.addEventListener('click', editItem);
            //Save in storage
            addToLocalStorage(id, textField.value);
            //Display msg
            textField.value = "";
            displayAlert("Item added", "green");
            displayButton();
        } else {
            displayAlert("Please enter a value between 1 - 15", "red");
            textField.value = "";
        }
    }
}
/*
function editItem(e) {
    if (textField.value.length > 0 && textField.value.length < 16) {
        console.log(textZone);
        console.log(textField.value);
        currentTarget.childNodes[0].textContent = textField.value;
        console.log(textZone);
        editId = e.currentTarget.parentElement.parentElement.dataset.id;
        edit = false;
        editLocalStorage(editId, textField.value);
        displayAlert("Edit succes", "green");
        textField.value = "";
    } else {
        displayAlert("Please enter a value between 1 - 15", "red");
        textField.value = "";
    }
}
*/
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
    }, 1200);
    setTimeout(function () {
        notiBar.className = "notification-msg";
        notiBar.textContent = "";
    }, 2000)
}

function displayButton() {
    const items = document.querySelectorAll(".item");
    //    console.log(items);
    if (items.length >= 1) {
        clearBtn.style.display = "inline";
    } else {
        clearBtn.style.display = "none";
    }
}

function clearItems() {
    const delItem = document.querySelectorAll(".item");

    if (delItem.length > 0) {
        delItem.forEach(function (item) {
            itemsContainer.removeChild(item);
        })
    }
    displayAlert("List cleared", "red");
    displayButton();
    localStorage.removeItem('list');
}


function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    removeFromLocalStorage(id);
    itemsContainer.removeChild(element);
    displayAlert("Item deleted", "red");
    displayButton();
}

function editItem(e) {
    edit = true;
    currentTarget = e.currentTarget.parentElement.parentElement;
    textZone = currentTarget.childNodes[0].textContent;
    //console.log(currentTarget);
    //console.log(textZone);
    textField.value = textZone;
}

function addToLocalStorage(id, value) {
    const grocery = {
        id,
        value,
    }
    //Check if the items array excist in storage
    //If not creates one
    let items = getLocalStorage();
    //console.log(grocery);
    items.push(grocery);
    //console.log(items);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id == id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem('list')) : [];
}