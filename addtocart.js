//CODE 1
const product = [
    {
        id: 0,
        image: 'mp2images/carrotcake.jpg',
        title: 'Carrot cake',
        price: 650,
    },
    {
        id: 1,
        image: 'mp2images/peachcake.jpg',
        title: 'Peach&Cream cake',
        price: 700,
    },
    {
        id: 2,
        image: 'mp2images/chococake.jpg',
        title: 'Chocolate cake',
        price: 400,
    }

];

//ADDING ITEMS TO DISPLAY PAGE ROOT DIV
//CODE 1
const categories = [...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')//END CODE 1


//CODE 2
var cart = [];
//END CODE 2

//CODE 3
//Add button function 
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
} //END CODE 3


//CODE 4
//Trash icon delete item button
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}//END CODE 4


//CODE 2
//CODE to be called by ADD and Delete function
function displaycart(a){
    let j = 0, //END CODE 2

    //CODE 6
    //declaring initial total value
    total=0;

    //CODE 5
   //code for displaying # of items on cart icon
   document.getElementById("count").innerHTML = cart.length;
   //code for displaying items on cart icon

   //CODE 2
   //condition code to display total amount
    if(cart.length==0){
        //This is the default display when no item is selected
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        //END CODE 2

        //CODE 6
        document.getElementById('total').innerHTML = "P "+0+".00";
   
        
    }//CODE 2
    //condition if an item is selected
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            //END CODE 2


            //CODE 6
            //declaring var for total amount
            total += price;
            //displaying total sum price
            document.getElementById("total").innerHTML = "P "+total+".00";

            
            //CODE 2
            //This is the selected item
            //It will create a new item on the cartItem div
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>P ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}//END CODE 2


