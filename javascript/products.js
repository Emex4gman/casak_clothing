let products = JSON.parse(localStorage.getItem("products") ?? "[]");
$(() => {
  //http://127.0.0.1:5501/women.html
  // []
  let category = window.location.href.split("/").slice(-1)[0].split(".")[0];
  console.log(window.location.href);
  // console.log(window.location.href.split("/"));
  // console.log(window.location.href.split("/").slice(-1));
  // console.log(window.location.href.split("/").slice(-1)[0]);
  // console.log(window.location.href.split("/").slice(-1)[0].split("."));
  // console.log(window.location.href.split("/").slice(-1)[0].split(".")[0]);
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.category === category.toUpperCase())
      $(".products").append(`
   <div class="product-item">
   <a href="/product.html?id=${product.id}">
   <img src="./images/${product.image}" alt="" width="220" height="220" />
   </a>
              <br />
            <strong>${product.name.toUpperCase()}</strong>
              <br />
            <p>${product.category}-CATEGORY</p>
            <p>$${product.price}</p>
           
          </div>
  `);
  }
});
