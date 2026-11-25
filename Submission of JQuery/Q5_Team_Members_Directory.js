// Q5: Traversal methods demonstrate parent(), children(), next(), find() and siblings().
$(function () {
  $(".manager").on("click", function () {
    // Highlight direct reports in the same department.
    $(this).siblings(".report").toggleClass("highlight");
  });

  $(".member").hover(
    function () { $(this).children(".contact").stop(true, true).slideDown(120); },
    function () { $(this).children(".contact").stop(true, true).slideUp(120); }
  );

  $(".dept-title").on("click", function () {
    // children() selects direct member elements of this department.
    $(this).parent(".department").children(".member").toggleClass("highlight");
  });

  $("#random").on("click", function () {
    const $employees = $(".member.report");
    const randomIndex = Math.floor(Math.random() * $employees.length);
    const $chosen = $employees.eq(randomIndex);
    $(".member").removeClass("selected");
    // siblings() highlights employees who share the same department container.
    $chosen.addClass("selected").siblings(".report").addClass("highlight");
  });

  $("#collapse").on("click", function () {
    // parent() gets each department; find() gets all member descendants.
    $(".department").each(function () {
      const $members = $(this).parent().find(".member");
      $members.toggle();
    });
  });
});
