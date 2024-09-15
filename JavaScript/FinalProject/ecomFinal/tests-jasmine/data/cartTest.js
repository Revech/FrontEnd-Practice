import {addToCart,cart,loadFromStorage} from '../../data/cart.js';
//test each condition of the if statement 

//test suite

describe('Test Suite : Add To Cart', () =>{

it('Add an Existing Product to theCart',() => {


// creating a mock
// object we wanna mock , method we wanna mock 
spyOn(localStorage, 'getItem').and.callFake(() => {


// this is a fake function

return JSON.stringify([]);// since local storage takes a string 


});// this will replace localstorage.getItem with a fake version and it will return an object
// we are overwriting the getItem method with the current function 
loadFromStorage();
// we used loadFromStorage(); since we are importing the cart and then overwriting it with fake method --> this will not work
// solution : after using fake method --> reload the cart --> overwrite will be successfull





console.log(localStorage.getItem('cart'));


// not sung expect since add to cart does return a value 
// aading a product to an empty cart
addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//comparing cart length and cart

expect(cart.length).toEqual(1);

});

it('Add a New Product to theCart',() => {

    

});

});


//flasky test : sometimes passes sometimes fails even if we didnt change the code ---> use mocks in jasmine

// a mock replace a method with a fake version and this fake version the coder can make it do whatever it wants


//Unit Test : testing one unit or 1 piece of code 

// Itegration test : many units of code working together  

// to be a good coder : when testing make sure that in the test file , the structure matches the structure of the files u are testing 