import { cart, getTotalItems } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { deliveryOptions, getDeliveryOptions } from '../../data/deliveryOptions.js';

import { formatCurrency } from '../utils/money.js';
import { addOrder } from '../../data/orders.js';


export function renderPaymentSummary() {
  let productPriceCents = 0;
  let ShippingPriceCents = 0;
  // console.log('payment');
  cart.forEach((cartItem) => {

    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;


    const deliveryOption = getDeliveryOptions(cartItem.deliveryOptionId);
    ShippingPriceCents += deliveryOption.priceCents;

  });

  //console.log(productPriceCents);
  //console.log(ShippingPriceCents);

  const totalBeforeTaxCents = productPriceCents + ShippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1; // tax= 10% 10 /100
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHtml = `
   
      <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${getTotalItems()}):</div>
            <div class="payment-summary-money">
            $${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(ShippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
   
   
   `;
  // this part is the view
  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;


  // according to MVC when we click delete item we should generate the data(update data) (refresh) and update automatically the order summary section regenerate 


  // MVC makes the html always matches the data



  // USING BACKEND TO CREATE AN ORDER

  document.querySelector('.js-place-order').addEventListener('click', async () => {

try{


  const response = await fetch('https://supersimplebackend.dev/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cart: cart
    })

  });
  //create an order -->POST
// to get the data that is attached to the reponse we use 

const order = await response.json();
//console.log(order);
addOrder(order);




} catch(error){

console.log('unexpected error');
}

// to go to another html page 

window.location.href = 'orders.html';

});
}



