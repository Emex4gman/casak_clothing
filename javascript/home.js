let currentImage = 1;
let currentTestimony = 1;
$(() => {
  for (let i = 0; i < 8; i++) {
    $(".futured-products").append(`
   <div class="product-item">
            <img src="./images/women.jpg" alt="" width="220" height="220" />
              <br />
            <strong>LIAOCX Men’s Soccer Boots Shoes TF/AG Athletic Sn…</strong>
              <br />
            <p>MEN</p>
            <p>$60.00</p>
            <button >ADD TO CART</button>
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
});

setInterval(() => {
  if (currentTestimony == 3) {
    currentTestimony = 1;
  } else {
    currentTestimony++;
  }
}, 4000);
