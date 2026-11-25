// Q4: Demonstrate jQuery hide/show, slide and fade effects.
$(function () {
  $("#hide").on("click", function () { $(".banner").first().hide(); });
  $("#show").on("click", function () { $(".banner").show(); });
  $("#slideUp").on("click", function () { $(".banner").slideUp(); });
  $("#slideDown").on("click", function () { $(".banner").slideDown(); });
  $("#fadeOut").on("click", function () { $(".banner").fadeOut(); });
  $("#fadeIn").on("click", function () { $(".banner").fadeIn(); });

  // Rotate through banners every 5 seconds using fadeOut() and fadeIn().
  let current = 0;
  const $banners = $(".banner");
  $banners.hide().eq(0).show();

  setInterval(function () {
    $banners.eq(current).fadeOut(400, function () {
      current = (current + 1) % $banners.length;
      $banners.eq(current).fadeIn(400);
    });
  }, 5000);
});
