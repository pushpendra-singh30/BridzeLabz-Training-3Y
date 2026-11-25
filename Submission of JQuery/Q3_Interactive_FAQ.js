// Q3: FAQ answers open and close when their questions are clicked.
$(function () {
  $(".question").on("click", function () {
    $(this).next(".answer").stop(true, true).slideToggle();
  });

  $(".question").on("dblclick", function () {
    $(".answer").slideUp();
  });

  $(".question").hover(
    function () { $(this).css("color", "#087c8c"); },
    function () { $(this).css("color", ""); }
  );

  // Focus highlights the parent question; blur restores its background.
  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").children(".question").css("background", "#d8f4e8");
  }).on("blur", function () {
    $(this).closest(".faq-item").children(".question").css("background", "");
  });
});
