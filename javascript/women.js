let products = JSON.parse(localStorage.getItem("products") ?? "[]");

$(() => {
  loadJsonFile(jsonFilePath);
});

function loadJsonFile(filePath = "") {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        let data = JSON.parse(httpRequest.responseText);
        // if (callback) callback(data);
        products = data;
        console.log(data);
        loadPageWithData(products);
      }
    }
  };
  httpRequest.open("GET", filePath);
  httpRequest.send();
}
const loadPageWithData = (payload = []) => {
  for (let i = 0; i < payload.length; i++) {
    let product = payload[i];
    if (product.category === "WOMEN")
      $(".products").append(`
   <div class="product-item">
   <a href="/product.html?id=${product.id}">
   <img src="./images/${product.image}" alt="" width="220" height="220" />
   </a>
              <br />
            <strong>${product.name}</strong>
              <br />
            <p>${product.category}</p>
            <p>$${product.price}</p>
            <button>ADD TO CART</button>
          </div>
  `);
  }
};
