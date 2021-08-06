// Total Amount
let totalAmount = 0.0;
// Load card from local storage
let cart = getCartLocalStorage();
// Onpage load
$(() => {
  // setLocalStorage(cartOld);
  cart = getCartLocalStorage();
  dispayTheCartItems();
  updateTotalAmount();
  $(".total-amount button").click((e) => {
    makePayment();
  });
});
/**
 *A function to get the cart list  from local Storage
 * @returns {[]}
 */
function getCartLocalStorage() {
  return JSON.parse(window.localStorage.getItem("cart") ?? "[]");
}

/**
 * A function to set the cart list in the local Storage
 * @param {Array} crt
 */
function setLocalStorage(crt = []) {
  window.localStorage.setItem("cart", JSON.stringify(crt));
}

// Display the the cart itmes and the price
function dispayTheCartItems() {
  $(".cart-items").html("");
  if (cart.length === 0) {
    $(".cart-items").html("<h2>No Item In Cart</h2>");
  }
  // Loop through the cart and display items
  cart.forEach((e) => {
    $(".cart-items").append(`
  <div class="cart-items-container">
  <div class="cart-item-img">
    <img src="./images/${e.image}" width="100px" height="100px" />
  </div>
  <div class="cart-action">
    <p>${e.name}</p>
    <p>Price: <span>$${e.grossPrice}</span></p>
    <button id="add" onclick="increaseQty('${e.id}')">
      <i class="fas fa-plus"></i>
    </button>
    <span>${e.qty}</span>
    <button id="reduce" onclick="decreaseQty('${e.id}')">
      <i class="fas fa-minus"></i>
    </button>
    <button id="remove" onclick="removeItem('${e.id}')">Delete</button>
  </div>
</div>`);
  });
}
// Make Payment
function makePayment() {
  let finalCart = getCartLocalStorage();
  if (finalCart.length > 0) {
    emptyCart();
    alert("Item Has been Paid");
  }
}

// remove item from cart
function removeItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart.splice(i, 1);
      updateTotalAmount();
    }
  }
}
// Increasing the quantity of an item in the cart
function increaseQty(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].qty++;
      cart[i].grossPrice = cart[i].price * cart[i].qty;
      updateTotalAmount();
    }
  }
}
// Decreasing the quantity of an item in the cart
function decreaseQty(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].qty == 1) {
      removeItem(id);
    }
    if (cart[i].id == id && cart[i].qty > 1) {
      cart[i].qty--;
      cart[i].grossPrice = cart[i].price * cart[i].qty;
      updateTotalAmount();
    }
  }
}
// update the total amount
function updateTotalAmount() {
  totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].qty * cart[i].price;
  }
  dispayTheCartItems();
  $("#totalAmount").html(totalAmount);
  setLocalStorage(cart);
}

// remove all items from cart
function emptyCart() {
  cart = [];
  updateTotalAmount();
}
