// Q9: jqV1 is jQuery 3.6.4; $ (jQuery) is jQuery 3.7.1.
// noConflict(true) released both global aliases for the first version.
jqV1(function () {
  let slide = 0;
  const $slides = jqV1("#carousel .widget");
  $slides.hide().eq(0).show();

  // Version 1 rotates the carousel every 3 seconds.
  setInterval(function () {
    $slides.eq(slide).fadeOut(250, function () {
      slide = (slide + 1) % $slides.length;
      $slides.eq(slide).fadeIn(250);
    });
  }, 3000);

  // Version 1 highlights the active widget.
  jqV1(".widget").on("click", function () {
    jqV1(".widget").removeClass("active");
    jqV1(this).addClass("active");
  });
});

// Version 2 (global $) controls the notification modal and tooltips.
$(function () {
  $("#notify").on("click", function () { $("#modal").css("display", "flex").hide().fadeIn(); });
  $("#closeModal").on("click", function () { $("#modal").fadeOut(); });

  // Simple title-based tooltip using the title attribute.
  $(".tooltip").on("mouseenter", function () {
    const title = $(this).attr("title");
    $(this).attr("data-original-title", title).removeAttr("title");
    $("<span class='tip'></span>").text(title).css({
      display: "block", background: "#222", color: "#fff", padding: "5px", marginTop: "5px"
    }).appendTo(this);
  }).on("mouseleave", function () {
    $(this).find(".tip").remove();
    $(this).attr("title", $(this).attr("data-original-title"));
  });
});
