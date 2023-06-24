const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

//Acts as a button function on the Cart icon
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: 'Carrot Cake',
        image: '111.jpg',
        price: 650
    },
    {
        id: 2,
        name: 'Lemon Meringue Cake',
        image: '666.jpg',
        price: 650
    },
    {
        id: 3,
        name: 'Chocolate Cake',
        image: '333.jpg',
        price: 680
    },
    {
        id: 4,
        name: 'Red Velvet Cupcake',
        image: '44.jpg',
        price: 300
    },
    {
        id: 5,
        name: 'Banana Loaf',
        image: '55.jpg',
        price: 250
    },
    {
        id: 6,
        name: 'Oatmeal Cookies',
        image: '22.jpg',
        price: 200
    }
];

//Creating menu item on mainpage
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{ 
        //this is what is being returned by the arrow function
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

//initApp shows the menu list
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // this keeps a copy of the products
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = ''; //this removes the elements in the listCard
    let count = 0;
    let totalPrice = 0;

    //Displays total amount of selected item
    listCards.forEach((value, key)=>{
        totalPrice += value.price;
        count +=  value.quantity;

        //condition if an item is selected
        if(value != null){

            //it displays the selected item on the cart
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })//Displays total amount and # of selected item
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}




