/*
--------------------
This page displays the products on the checkout page 
------------------------
*/



import { cart, removeFromCart, getTotalItems, updateDeliveryOption } from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
// ./ ---> current folder (only for modules)
import { formatCurrency } from '../utils/money.js';
// to combine all this HTML together and store the results to put it on the webpage 

//using ESM version of a library is a version that works with js modules
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveryOptions , getDeliveryOptions} from '../../data/deliveryOptions.js';
// defualt export 

// console.log(dayjs());

//const today = dayjs(); 
//const deliveryDate = today.add(7, 'days');
//console.log(deliveryDate);
//deliveryDate.format('dddd , MMMM D');
//console.log(deliveryDate.format('dddd , MMMM D'));


import {renderPaymentSummary} from './paymentSummary.js';

export function renderOrder() {


let cartHTML = '';

cart.forEach((cartItem) => {

  const productId = cartItem.productId;



  const matchProduct= getProduct(productId);

 


  

  //console.log('hi i am here');



  // this section serves to update the Delivery Date : ${dateString} title 
  const deliveryOptionId = cartItem.deliveryOptionId;
 const deliveryOption = getDeliveryOptions(deliveryOptionId);


  const today = dayjs();
  const deliveryDate = today.add(

    deliveryOption.deliveryDays,
    'days'
  );
  const dateString = deliveryDate.format('dddd, MMMM D');

  // end of section 

    cartHTML +=

    `
   <div class="cart-item-container js-container-${matchProduct.id}">
          <div class="delivery-date">
            Delivery Date : ${dateString}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchProduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
              ${matchProduct.name}
              </div>
              <div class="product-price">
                ${matchProduct.getPrice()} 
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary js-delete" data-product-id = "${matchProduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              
            ${deliveryOptionsHTML(matchProduct, cartItem)}
            </div>
          </div>
        </div>
  
  `;

});

function deliveryOptionsHTML(matchProduct, cartItem) {
let html = '';
deliveryOptions.forEach((deliveryOption) => {

  const today = dayjs();
  const deliveryDate = today.add(

    deliveryOption.deliveryDays,
    'days'
  );
  const dateString = deliveryDate.format('dddd, MMMM D');

  const priceString = deliveryOption.priceCents === 0
    ?
    'FREE -Shipping'
    :
    `$${formatCurrency(deliveryOption.priceCents)} -Shipping`;

  const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

  html +=
    `
  <div class="delivery-option js-delivery" data-product-id = "${matchProduct.id}"data-delivery-option-id = "${deliveryOption.id}">
                <input type="radio" ${isChecked ? 'checked' : ''}
                  class="delivery-option-input"
                  name="delivery-option-${matchProduct.id}">
                <div>
                  <div class="delivery-option-date">
                   ${dateString}
                  </div>
                  <div class="delivery-option-price">
                   ${priceString}
                  </div>
                </div>
              </div>

  `

});
return html;

} 


document.querySelector('.js-order').innerHTML = cartHTML;
//console.log(cartHTML);


document.querySelectorAll('.js-delete').forEach((link) => {

link.addEventListener('click', () => {

  const productId = link.dataset.productId;
  //console.log(productId);
  removeFromCart(productId);
  //console.log(cart);
  const container = document.querySelector(`.js-container-${productId}`);
  //  console.log(container);
  container.remove();
  document.querySelector('.js-checkoutHeader').innerHTML =
    `${getTotalItems()} Items `;

    renderPaymentSummary();// clicking delete will update the data in the order section

});

});

document.querySelector('.js-checkoutHeader').innerHTML =
`${getTotalItems()} Items `;

document.querySelectorAll('.js-delivery')
.forEach((element) => {

  element.addEventListener('click', () => {
    const { productId, deliveryOptionId } = element.dataset;
    updateDeliveryOption(productId, deliveryOptionId);
    renderOrder();
    renderPaymentSummary();// changing the shipping options  will update the data in the order section
  })


});
 

  }
    
 

// we added render function so we can change the delivery date title without refreshing the page or using dom---> we are just rerunning the code again as an automatc refresher 
