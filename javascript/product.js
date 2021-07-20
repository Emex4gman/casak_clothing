$(() => {
  // Load add the json product using ajasx
  // shopingcart.html?product=1
  // Get the url and get the product id
  // get the item based on the id
  // Display the product on the product page
});

// A function to get the cart list  from local Storage
/**
 *
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

// add item to cart
function addItem(item) {
  let local = getCartLocalStorage();
  // local.push({
  //   id: 3,
  //   name: "Banana",
  //   qty: 1,
  //   price: 300,
  //   grossPrice: 300,
  // });
  local.push(item);

  //add to local Storage
  setLocalStorage(local);
  // updateTotalAmount();
}
