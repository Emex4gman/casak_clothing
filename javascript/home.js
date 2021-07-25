let currentImage = 1;
let products = JSON.parse(localStorage.getItem("products") ?? "[]");
$(() => {
  for (let i = 0; i < 6; i++) {
    let product = products[Math.floor(Math.random() * products.length)];
    $(".futured-products").append(`
   <div class="product-item">
      <a href="/product.html?id=${product.id}">
            <img src="./images/${product.image}" alt="" width="220" height="220" />
              </a>
              <br />
            <strong>${product.name}</strong>
              <br />
            <p>${product.category}</p>
            <p>$${product.price}</p>
           
          </div>
  `);
  }

  setInterval(() => {
    $(".slider img").css("z-index", "0");
    $(".slider .slider-title").css("left", "-500px");
    $(".slider img").css("transform", "scale(1)");

    if (currentImage == 3) {
      currentImage = 1;
    } else {
      currentImage++;
    }
    $(`.slider .slider-title:nth-child(${currentImage + 3})`).css(
      "left",
      "10px"
    );
    $(`.slider img:nth-child(${currentImage})`).css("z-index", "10");
    $(`.slider img:nth-child(${currentImage})`).css("transform", "scale(1.1)");
  }, 3000);

  //handle search
  $(".search i").click(function (e) {
    e.preventDefault();
    let query = $("#search").val().trim();

    if (query.length > 1) {
      location.href = location.href + `search.html?name=${query}`;
      // Send to search html
    }
  });
});
