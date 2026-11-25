// Q7: Filter courses as the user types.
$(function () {
  $("#search").on("keyup", function () {
    const query = $(this).val().toLowerCase().trim();
    let matched = 0;

    $(".course").each(function () {
      const originalText = $(this).text();
      const isMatch = originalText.toLowerCase().includes(query);

      // Show matching courses and hide non-matching courses.
      $(this).toggle(isMatch);
      $(this).removeClass("match");

      if (isMatch) {
        matched++;
        if (query) {
          // Highlight matching course with CSS.
          $(this).css({ backgroundColor: "#fff0a6", fontWeight: "bold" });
        } else {
          $(this).css({ backgroundColor: "", fontWeight: "" });
        }
      } else {
        $(this).css({ backgroundColor: "", fontWeight: "" });
      }
    });

    $("#count").text(`Matched courses: ${matched}`);
  });

  $("#clear").on("click", function () {
    $("#search").val("").trigger("keyup");
  });
});
