/*
------------------
Another way to generate objects is through classes 
-----------------
benifits of Classes:

- cleaner
- extra features: ex constructor 
-better way to generate objects

--------------------
we are loading in checkout.js
*/
// Use Pascale Case to generate Objects


class Cart {

    cartItems;//public property 

    // save #localStorageKey in a property
    #localStorageKey;//# means private 



    // constructor : when generating an object it will run it automatically (put setup code in)

    // a constructor without a parameter will set the #localStorageKey by defualt to 'cart-oop'

    // constructor rules : should be named constructor // no returns 
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();

    }


    #loadFromStorage() {

        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        if (!this.cartItems) {
            this.cartItems = ['test'];
        }


    }


    loadFromStorage() {

        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
        if (!this.cartItems) {
            this.cartItems = ['test'];
        }


    }

    saveToStorage() {

        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    addToCart(productId) {

        let matchItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchItem = cartItem;
            }
        }
        );

        const quantitySelector = document.querySelector(
            `.js-quantity-selector-${productId}`
        );
        const sQuantity = Number(quantitySelector.value);



        if (matchItem) {
            matchItem.quantity += sQuantity;
        }
        else {
            this.cartItems.push({
                productId: productId,
                quantity: sQuantity,
                deliveryOptionId: '1'
            });
        }


        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }

        });

        this.cartItems = newCart;
        this.saveToStorage();

    }

    getTotalItems() {

        return this.cartItems.length;


    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchItem = cartItem;
            }
        });

        matchItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }

}


const reveCart = new Cart('cart-oop'); // creating a new object using a class

//reveCart.#localStorageKey= 'cart-oop';



//console.log(reveCart);

// each object we generate from a class is called instance 

//console.log(reveCart instanceof Cart);// checking if reveCart is generating from Cart 


//cart.#localStorageKey = 'test'; ---> syntax error


