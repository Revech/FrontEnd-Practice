import { cart, addToCart } from '../data/cart.js';
import { formatCurrency } from './utils/money.js';
// it will take the variable cart from the module so that it will be visible here #1 all imports should be at the top of the file 
// #2 use live server so the module to work 
//#3 we removed <script src="data/cart.js"></script> we used module instead
// module helps avoid naming conflicts and no need to worry about the order of script tags 
// changine the cart to a diffrent name 
//import{cart as reve} from '../data/cart.js'; //now its name is 'reve'

// import * as cartModule form ''; // this will import everything from the cart file and put it as an object in cartModule // now we use it as ----> cartModule.addToCart('reve')

import { products, loadProducts } from '../data/products.js';


loadProducts(renderProductsGrid);


function renderProductsGrid() {

  // The data is coming from products.js file
  let productsHTML = '';

  // for Each takes each object saves it in product parameter and rns the function 
  products.forEach((product) => { // accumelator pattern (productHTML)combining all the HTML to all the products together 



    productsHTML += `
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()} 
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option  selected value="1">1</option>
              <option  value="2">2</option>
              <option  value="3">3</option>
              <option  value="4">4</option>
              <option  value="5">5</option>
              <option  value="6">6</option>
              <option  value="7">7</option>
              <option  value="8">8</option>
              <option  value="9">9</option>
              <option  value="10">10</option>
            </select>
          </div>

            ${product.extraInfoHTML()}

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>
    
    `;

  }

  );

  /*
  Before converting products to classes :
  
  
    <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-${this.rating.stars * 10}.png">
              <div class="product-rating-count link-primary">
              ${product.rating.count}
              </div>
            </div>
  
            <div class="product-price">
              $${formatCurrency(this.priceCents)} 
            </div>
  
  
  
  */


  // we added a data attribute "data-product-id = "${product.name}" " since we want to which product did the costumer chose to put inside a cart 
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
  // looping through each button




  function updateCartQuantity() {
    let cartQ = 0;
    cart.forEach((cartItem) => {
      cartQ += cartItem.quantity;
    }

    );
    //console.log(cartQ); 
    document.querySelector('.js-cart-quantity').innerHTML = cartQ;
  }

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {

        // console.log('product added'); Code is working


        //console.log(button.dataset.productId);
        //dataset gives us all the data attributes attached to the button 
        // notice that the productId changed cases 

        const productId = button.dataset.productId;
        // looping #1 solving the quantity issue 


        addToCart(productId);

        updateCartQuantity();



        // Show "Added to Cart" message
        const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
        if (addedMessage) {
          addedMessage.classList.add('added-to-cart-visible');
          setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible');
          }, 1000); // Hide after 2 seconds
        }




      });
    });

}