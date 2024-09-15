/*


One way to generate objects is through OOp by manual and automatic way 

we are loading in checkout.js
*/

// use pascale case since we a generating objects 
// pascale is all the first letters are capitalized including the first one 

//Automatic Creation 
function Cart(localStorageKey){
    const businessCart = {
   
        cartItems : undefined,
    
         loadFromStorage() {
    
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = ['test'];
            }
        
        
        },
    
    //  Problem : ----> localStorage.setItem('cart-businesss') ---> every cart we generate will be getting its data from the same place in location storage

    // Solution --->  localStorage.setItem(localStorageKey,
      saveToStorage() {
    
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
    
    
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
        
        
            this.saveToStorage();// to acces the function inside the object 
        },
    
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
        
            });
        
            this.cartItems = newCart;
            this.saveToStorage();
        
        },
    
       getTotalItems() {
    
            return this.cartItems.length;
        
        
        },
    
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
    
    
    };
    
    businessCart.loadFromStorage();
    return businessCart;

}

// Generating cart objects using the function 


const reveCart = Cart('cart-oop');
const broCart = Cart();// with no localStorageKey
//console.log(reveCart);


/*
Manual Creation of objects 
--------------------------------------
The problem in this way that we are writing too many lines of code 

solution : create a method that generate Objects
------------------------------------------
--------------------
const cart = {
    //this will give the outer object
    cartItems : undefined,

     loadFromStorage() {
//this is a shortcut ---> original loadFromStorage: function()
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));// so we dont affect the original cart
        if (!this.cartItems) {
            this.cartItems = ['test'];
        }
    
    
    },


  saveToStorage() {

        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },


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
    
    
        this.saveToStorage();// to acces the function inside the object 
    },

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
    
        });
    
        this.cartItems = newCart;
        this.saveToStorage();
    
    },

   getTotalItems() {

        return this.cartItems.length;
    
    
    },

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


};

cart.loadFromStorage();

 ----------------------------   
//cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//console.log(cart);

// grouping the data and the functions together inside  an object and easy to create multi objects



------------------------------------

// now we created a completly diffrent carts for diffrent uses 

const businessCart = {
   
    cartItems : undefined,

     loadFromStorage() {

        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        if (!this.cartItems) {
            this.cartItems = ['test'];
        }
    
    
    },


  saveToStorage() {

        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },


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
    
    
        this.saveToStorage();// to acces the function inside the object 
    },

    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
    
        });
    
        this.cartItems = newCart;
        this.saveToStorage();
    
    },

   getTotalItems() {

        return this.cartItems.length;
    
    
    },

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


};

businessCart.loadFromStorage();

*/




