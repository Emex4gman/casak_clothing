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
