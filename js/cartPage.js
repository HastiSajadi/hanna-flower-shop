let carts = document.querySelectorAll('.add-cart');



let products = [
    {
        id:0,
        name:"flower1",
        inCart:0,
        price:150000,
        img:"img/product1.jpg"
    },
    {
        id:1,
        name:"flower2",
        inCart:0,
        price:250000,
        img:"img/product2.jpg"
    },
    {
        id:2,
        name:"flower3",
        inCart:0,
        price:350000,
        img:"img/product3.jpg"
    },
    {
        id:3,
        name:"flower4",
        inCart:0,
        price:450000,
        img:"img/product1.jpg"
    },
    {
        id:4,
        name:"flower5",
        inCart:0,
        price:550000,
        img:"img/product2.jpg"
    },
    {
        id:5,
        name:"flower6",
        inCart:0,
        price:650000,
        img:"img/product3.jpg"
    }
    
]




for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click' , ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(product){
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers){
        document.querySelector(".fa-bag-shopping span").textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers' , productNumbers+1);
        document.querySelector(".fa-bag-shopping span").textContent = productNumbers+1;
    }else{
        localStorage.setItem('cartNumbers' , 1);
        document.querySelector(".fa-bag-shopping span").textContent = 1;
    }
    setItems(product);
};

function setItems(product){
   let cartItems = localStorage.getItem("productInCart");
   cartItems = JSON.parse(cartItems);

   if(cartItems != null){
    if(cartItems[product.name] == undefined){
        cartItems = {
            ...cartItems ,
            [product.name]:product
        }
    }
    cartItems[product.name].inCart+=1;
   }else{
    product.inCart = 1;
    cartItems = {
        [product.name]:product
    }
   }
   localStorage.setItem("productInCart" , JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = 0;

    if(cartCost != null){
        cartCost = localStorage.getItem("totalCost");
        if(cartCost != null){
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost+product.price);
        }else{
            localStorage.setItem("totalCost" , product.price);
        }
    }
}

//show total cost in cart page at the جمع کل

function showTotalCost(product){
  let cartCost = localStorage.getItem("totalCost");
  document.getElementById("totalCost").innerText= cartCost;
  document.getElementById("finalCost").innerText= cartCost;
}


//add data to cart page

function displayCart(){
        let cartItems = localStorage.getItem('productInCart');
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".cart-container table tbody");
        
        if(cartItems && productContainer ){
    
           productContainer.innerHtml= '';
    
           Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
            <tr>
              <td><h5>`+item.price+`</h5></td> 
              <td><h5>`+item.name+`</h5></td>
              <td><img src="`+item.img+`"></td>
              <td><a href="#"><i class='fa-solid fa-trash'></i></a></td>
            </tr>`
             
           })
        }
    }

    


onLoadCartNumbers();
showTotalCost();
displayCart();



