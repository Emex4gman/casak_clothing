const jsonFilePath = "../data/products.json";
loadJsonFileToLoacl(jsonFilePath);
$(() => {
  // Toggle mobile nav bar
  $(".mobile-nav h3").click(function (e) {
    $(".mobile-nav ul").toggleClass("open");
    if ($(".mobile-nav ul").hasClass("open")) {
      $(".mobile-nav ul").css("max-height", "0");
    } else {
      $(".mobile-nav ul").css(
        "max-height",
        $(".mobile-nav ul")[0].scrollHeight + "px"
      );
    }
  });
});

function loadJsonFileToLoacl(filePath = "") {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        let data = JSON.parse(httpRequest.responseText);
        // if (callback) callback(data);
        localStorage.setItem("products", httpRequest.responseText);
      }
    }
  };
  httpRequest.open("GET", filePath);
  httpRequest.send();
}
