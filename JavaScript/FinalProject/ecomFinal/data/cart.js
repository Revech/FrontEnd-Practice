export let cart;
// convert back to array

loadFromStorage();
/*if(!cart)
{
    cart = [

        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 4
        
        }
        ];
}*/

export function loadFromStorage() {

    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [];
    }


}
function saveToStorage() {
    // local storage only saves strings --> convert cart to string
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {

    let matchItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchItem = cartItem;
        }
    }
    );
    // adding in the cart the quantity selected by the <Select> element 
    const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
    );
    const sQuantity = Number(quantitySelector.value);



    if (matchItem) {
        matchItem.quantity += sQuantity;
    }
    else {
        cart.push({
            productId: productId,
            quantity: sQuantity,
            deliveryOptionId: '1'
        });
    }
    //console.log(cart);

    //console.log(cart); if we pressed an item twice it will duplicate , it will not increase the quantity 

    // loop through the cart and look for the name if it exists


    // Attach event listeners to the dynamically created select elements

    saveToStorage();
}


export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }

    });

    cart = newCart;
    saveToStorage();

}
export function getTotalItems() {

    return cart.length;


}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchItem = cartItem;
        }
    });

    matchItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}


export function loadCart(func) {


    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
       xhr.response;
        func();
    });


    xhr.open('GET', 'https://supersimplebackend.dev/cart');


    xhr.send();
}
