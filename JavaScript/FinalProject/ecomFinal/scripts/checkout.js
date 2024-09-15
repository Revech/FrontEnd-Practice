import { renderOrder } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
//import '../data/cart-oop.js';
//import '../data/cart-class.js';
//this syntax runs all the code 
//import  '../data/backend-practice.js'; //open the network in inspect 
import { loadProductsFetch ,loadProducts} from '../data/products.js';
import { loadCart } from '../data/cart.js';


/*
--------------
Async awiat :

async makes the fuction return a promise 

await : lets us wait the promise to finihsh before going to the next line

cant use await inside a normal function 
---------------

*/

async function loadPage(){


//error handeling 

try{

//console.log('load');
   
    await loadProductsFetch(); // same as .then
  const val =  await new Promise((resolve) => {

        loadCart(() => {
            resolve('value3');// now val = value3 
        });
    });

} catch(error){

console.log('error async');

}
    

    renderOrder();
    renderPaymentSummary();

    //return 'value1'; // same as resolve('value1)
}
loadPage();








// we need to give promise.all() a promise

Promise.all([
    new Promise((resolve) => {

        loadProducts(() => {
            resolve('value1');
        }); 
        
    }) , // or loadProductsFetch()


    new Promise((resolve) => {

        loadCart(() => {
            resolve();
        });
    })
]).then(() => {

    renderOrder();
    renderPaymentSummary();

});


/* Practicing Promises :
-----------------
Promises :
------------------
- Helps keep our code flat and avoid nesting
-allow js to do multi things at the same time 
-runs the functions immidiatly 
-resolve : let us control when we go to the next step
-it will load the function after  loadProducts is finished 
- to add a next step to a promise at the end .then(function) 
---------------------------------
FEATURES
- resolve('value1');
then((value) => {

    this let us share a value between 2 steps 
    ------------------------------------
    - let us run multi promeses at the same time --> by creating an array and then add a next step 
    
  ------------------------  

STEPS:

- load products  -->  loadProducts
- wait the products to finish loading 
- go to .then using resolve to render the page 



CODE :: (before using Promise.all())

new Promise((resolve) => {

    // console.log('start promise');
    loadProducts(() => {
        // console.log('finished loading');
        resolve('value1');// wait for  loadProducts then goes to next step --> .then()
    });

}).then((value) => {

    //console.log(value);
    return new Promise((resolve) => {

        loadCart(() => {
            resolve();
        });// once the   cart load it will call resolve();

    })
    // console.log('then --> next step');

    //renderOrder();
    //renderPaymentSummary();

    // loadCart();
    // we should wait for the cart to finish loading and then proceed --> use resolve ? we cant since we are outside of the promise section
    // ---> another way inside .then() we can return a new promise so we can call resolve() wait then go to next step

}).then(() => {
    renderOrder();
    renderPaymentSummary();

});



*/




/*
before using promises
------------------------
loadProducts(() =>{

    renderOrder();
    renderPaymentSummary();

});
-------------------------
Why not use Callbacks instead of promises 
CallBacks Problems :
- multi callbacks cause alot of nesting --. NOT CLEAN CODE
- ex if we want to load the cart from the backend --> nesting will be a problem 

Comment Out the promise part 
|
|
|
v

ADD THIS :

loadProducts(() =>{
loadCart(()=>{
    renderOrder();
    renderPaymentSummary();

});
 
});


*/




