// Footer Subscribe Button Alert
function subscribeAlert() {
  alert("Thank you for subscribing.");
}

// Add to Cart Alerts
let cart = [];

function addToCart(item) {
  cart.push(item);
  alert("Item added to the cart.");
}

function clearCart() {
  if (cart.length > 0) {
      cart = [];
      alert("Cart cleared.");
  } else {
      alert("No items to clear.");
  }
}

function processOrder() {
  if (cart.length > 0) {
      cart = [];
      alert("Thank you for your order.");
  } else {
      alert("Cart is empty.");
  }
}

// Contact Form Alert
function submitForm() {
  alert("Thank you for your message.");
}
// Add to Cart Functionality using sessionStorage
function addToCart(item) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(item);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to the cart.");
}

// View Cart Modal
function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  if (cart.length === 0) {
      alert("Your cart is empty.");
  } else {
      let cartItems = cart.join("\n");
      alert(`Your Cart:\n${cartItems}`);
  }
}

// Clear Cart
function clearCart() {
  if (sessionStorage.getItem("cart")) {
      sessionStorage.removeItem("cart");
      alert("Cart cleared.");
  } else {
      alert("No items to clear.");
  }
}

// Process Order
function processOrder() {
  if (sessionStorage.getItem("cart")) {
      sessionStorage.removeItem("cart");
      alert("Thank you for your order.");
  } else {
      alert("Cart is empty.");
  }
}
// Save Form Data to localStorage
function saveFormData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Store data in localStorage
  localStorage.setItem("customerName", name);
  localStorage.setItem("customerEmail", email);
  localStorage.setItem("customerMessage", message);

  alert("Your information has been saved.");
}

// Retrieve and display saved form data (optional feature)
function displaySavedData() {
  let name = localStorage.getItem("customerName") || "Not provided";
  let email = localStorage.getItem("customerEmail") || "Not provided";
  let message = localStorage.getItem("customerMessage") || "Not provided";

  alert(`Saved Information:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
}


