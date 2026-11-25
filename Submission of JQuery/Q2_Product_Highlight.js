// Q2: Product interactions use delegated and direct jQuery events.
$(function () {
  $(".product").on("click", function (event) {
    if ($(event.target).hasClass("favorite")) return;
    $(this).toggleClass("highlight");
    // data-stock is read from the product's HTML data attribute.
    if ($(this).attr("data-stock") === "no") {
      alert($(this).find("h2").text() + " is currently out of stock.");
    }
  });

  $(".product").hover(
    function () { $(this).find(".details").stop(true, true).slideDown(150); },
    function () { $(this).find(".details").stop(true, true).slideUp(150); }
  );

  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥" : "♡");
  });

  // CSS attribute selector [data-discount] styles discounted products.
});
