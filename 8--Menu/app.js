const items = [
    {
        id: 1,
        title: "Avocado on toast",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: "Pork steak",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: "Pancakes",
        category: "dessert",
        price: 6.99,
        img: "./images/item-3.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "Fried eggs",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "Pizza",
        category: "lunch",
        price: 17.99,
        img: "./images/item-5.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "Ice cream",
        category: "dessert",
        price: 18.99,
        img: "./images/item-6.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "English breakfast",
        category: "breakfast",
        price: 14.99,
        img: "./images/item-7.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "Classic Roast lunch",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "Cake of the day",
        category: "dessert",
        price: 4.99,
        img: "./images/item-9.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "Beef steak",
        category: "lunch",
        price: 22.99,
        img: "./images/item-10.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
    ];

const section = document.getElementById("section");

window.addEventListener('DOMContentLoaded', function(){
  displayItems(items);
});

function displayItems(array){
  for(let i = 0; i < items.length; i++){

    item = array[i];

    //Creating items & assign classes
    let menuBody = document.createElement("div");
    menuBody.classList.add("menu-item");
    let img = document.createElement("img");
    img.classList.add("image");
    let infoBody = document.createElement("div");
    let itemHeader = document.createElement("div");
    itemHeader.classList.add("item-header");
    infoBody.classList.add("item-info");
    let title = document.createElement("h4");
    title.classList.add("title");
    let price = document.createElement("h4");
    price.classList.add("price");
    let description = document.createElement('p');
    description.classList.add('item-desc');

    //Appending children
    itemHeader.appendChild(title);
    itemHeader.appendChild(price);
    infoBody.appendChild(itemHeader);
    infoBody.appendChild(description);
    menuBody.appendChild(img);
    menuBody.appendChild(infoBody);

    section.appendChild(menuBody);

    img.src = item.img;
    title.textContent = item.title;
    description.textContent = item.desc;
    price.textContent = item.price;
  }
}

