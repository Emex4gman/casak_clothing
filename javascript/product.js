let data = [
  {
    id: "1",
    name: "Men Short",
    Price: 110.2,
    catergory: "MEN",
    image: "men.jpg",
    description: "MEN",
  },
  {
    id: "2",
    name: "Women Short",
    Price: 110.2,
    catergory: "WOMAN",
    image: "women.jpg",
    description: "WOMAN",
  },
  {
    id: "3",
    name: "Kids Short",
    Price: 110.2,
    catergory: "KIDS",
    image: "kids.jpg",
    description: "KIDS",
  },
];

$(() => {
  let urlId = window.location.href.split("id=")[1];
  console.log(window.location.href);
  console.log(urlId);
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    if (item.id == urlId) {
      $("#myProd").append("");
      $("#myProd").append(
        `<div>
            <img src="../images/${item.image}" alt=""  width="200px"/>
            <p>${item.name}</p>
            <p>re</p>
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
