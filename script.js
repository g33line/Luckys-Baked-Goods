

const cakeproducts = [
    {
        id: 0,
        image: 'mp2images/5.jpg',
        cname: 'Carrot Cake',
        price: 650,
    },
    {
        id: 1,
        image: 'mp2images/3.jpg',
        cname: 'Peaches&Cream Cake',
        price: 700,
    },
    {
        id: 2,
        image: 'mp2images/4.jpg',
        cname: 'Chocolate Cake',
        price: 400,
    },
    {
        id: 3,
        image: 'mp2images/2.jpg',
        cname: 'Lemon Meringue Cake',
        price: 650,
    }

];

const categories = [...new Set(cakeproducts.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('cakemenu').innerHTML = categories.map((item)=>
    {
        var {image, cname, price} = item; //object destructuring
        return(
            `<div class='item'>
                <img src="mp2images/${image}">
                <div class="cakename">${cname}</div>
                <div class="price">${price}</div>
                <button onclick="orderNow"`+(i++)+`">Order Now</button>"
            </div>`
        )
    }).join('')

    var basket = [];

    function orderNow(a){
        basket.push({...categories[a]});
        displaycakecart();
    }

    function displaycakecart(a){
        let j=0;

        if(basket.length==0){
            document.getElementById('yourorders').innerHTML = "Your cart is empty";
        }
        else{
            document.getElementById('yourorders').innerHTML = basket.map((items) =>
            {
                var {image, cname, price} = items;

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
    }