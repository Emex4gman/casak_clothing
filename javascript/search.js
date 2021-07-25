let products = JSON.parse(localStorage.getItem("products") ?? "[]");

$(() => {
  let name = window.location.href.split("name=")[1];
  console.log(window.location.href);

  $(".search-text strong").html(name);
  let found = products.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  if (found.length === 0) {
    $(".products").append(`<h2>No Product found</h2>`);
  }
  for (let i = 0; i < found.length; i++) {
    let product = found[i];
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

  //handle search
  $(".search i").click(function (e) {
    e.preventDefault();
    let query = $("#search").val().trim();

    if (query.length > 1) {
      location.href = `search.html?name=${query}`;
    }
  });
});
