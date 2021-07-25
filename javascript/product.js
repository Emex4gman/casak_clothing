let products = JSON.parse(localStorage.getItem("products") ?? "[]");

$(() => {
  let urlId = window.location.href.split("id=")[1];
  // console.log(window.location.href);
  // console.log(urlId);
  $("#myProd").html("");
  for (let i = 0; i < products.length; i++) {
    let item = products[i];
    if (item.id == urlId) {
      $("#myProd").append(
        ` <div class="myProd-product">
            <div>
              <img src="../images/${item.image}" alt="" width="200px" />
            </div>
            <div>
              <p class="name">${item.name}</p>
              <p class="description">${item.description}</p>
              <a href="/${item.category.toLowerCase()}.html">${
          item.category
        }</a>
              <p class="price">$${item.price}</p>
              <button onclick="addItem('${item.id}')">ADD TO CART</button>
            </div>
          </div>
          `
      );
    }
  }
  // Load add the json product using ajasx
  // shopingcart.html?product=1
  // Get the url and get the product id
  // get the item based on the id
  // Display the product on the product page
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

// add item to cart
function addItem(id) {
  let local = getCartLocalStorage();

  let found = products.filter((e) => e.id == id);

  // Check if item is in cart
  let foundInCArt = local.filter((e) => e.id == id);
  if (foundInCArt.length > 0) {
    alert("item Already in cart");
  }

  if (found.length > 0 && foundInCArt.length == 0) {
    item = found[0];
    let itemToAdd = {
      ...item,
      grossPrice: item.price,
      qty: 1,
    };
    local.push(itemToAdd);
    setLocalStorage(local);
    location.href = `shopingcart.html`;
  }
}
