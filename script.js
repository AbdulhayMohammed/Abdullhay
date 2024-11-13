
let totalPrice = 0;

// Function to update the total price
function updateTotalPrice() {
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Function to add a product to the cart
function addToCart(productId, price) {
    totalPrice += price;
    updateTotalPrice();
}

// Select all buttons with the class 'add-to-cart'
const buttons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(productId, price);
    });
});
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.reduce(
      (count, item) => count + item.quantity,
      0
      
      
    );
  }
// Checkout button functionality
document.getElementById('checkout').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment-method').value;
    const account=document.getElementById('account').value;
    const price =document.getElementById('price').value;

    if (paymentMethod) {
      account.value=="" , price.value=="";
      alert('enter account number and total price')

      let accountValue = 100;  // The current value of the account
let requiredAmount = 100; // The required amount to trigger the payment confirmation

// Check if the account value matches the required amount
if (accountValue === requiredAmount) {
  // If the condition is met, show a confirmation alert
  let userConfirmed = confirm("Do you want to proceed with the payment?");
  
  if (userConfirmed) {
    // User clicked 'OK', proceed with the payment
    alert("Payment successfully processed!");
  }}
//  if (condition) {
//    account.value=='value' , price.value=='value';
//    alert('confirm payment.');
//  } else {
//   // account.value=='value' , price.value=='value'
//  alert('check out complate succesfully')
//  }{
// //  {account.value=='value' && price.value=='value'
//         // alert('confirm payment.');
//         alert(`Checkout complete! Total: $${totalPrice.toFixed(2)}. Payment Method: ${paymentMethod}`);
       
 


//         // Reset cart after checkout
//         totalPrice = 0;
//         updateTotalPrice();
//         document.getElementById('payment-method').selectedIndex = 0; // Reset payment method
// }
    } else {
        alert('Please select a payment method.');
        document.getElementById('payment-method').selectedIndex = value; 
        // alert('confirm payment.');
    } 
  
});











// Initial cart state
let cartCount = 0;

// Get references to the DOM elements
const cartIcon = document.getElementById('cart-icon');
const cartCountElement = document.getElementById('cart-count');
const addToCartBtn = document.getElementById('add-to-cart-btn');

cartIcon.addEventListener('click', function() {
    cartCount++;   // Increment the cart count
    updateCartCount(); // Update the display with the new count
  });

// Function to update the cart count display
function updateCartCount() {
  cartCountElement.textContent = cartCount; // Update the text content of the cart count
}

// Event listener for "Add to Cart" button
addToCartBtn.addEventListener('click', function() {
  cartCount++; // Increment the cart count
  updateCartCount(); // Update the display with the new count
});






// Load saved cart count from localStorage, if available
 cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Update the cart count in the DOM
function updateCartCount() {
  cartCountElement.textContent = cartCount;
  // Persist the cart count in localStorage
  localStorage.setItem('cartCount', cartCount);
}

// Event listener for "Add to Cart" button
addToCartBtn.addEventListener('click', function() {
  cartCount++; // Increment the cart count
  updateCartCount(); // Update the display and save the new count
});

// Initial call to set up the count when the page loads
updateCartCount();









// Define the account value and the payment method
let accountValue = 100;  // The current value of the account
let requiredAmount = 100; // The required amount to trigger the payment confirmation

// Check if the account value matches the required amount
if (accountValue === requiredAmount) {
  // If the condition is met, show a confirmation alert
  let userConfirmed = confirm("Do you want to proceed with the payment?");
  
  if (userConfirmed) {
    // User clicked 'OK', proceed with the payment
    alert("Payment successfully processed!");
  } else {
    // User clicked 'Cancel', do not proceed
    alert("Payment was cancelled.");
  }
} else {
  // If the account value does not match, show an error or a different message
  alert("Insufficient balance or incorrect amount. Please check your account.");
}
