// Q8: Dynamically insert, remove and highlight blog posts.
$(function () {
  let postNumber = 6;

  $("#addPost").on("click", function () {
    $("#posts").append(`<article class="post"><h2>New Post ${postNumber}</h2><p>This post was added dynamically.</p></article>`);
    postNumber++;
  });

  $("#featuredPost").on("click", function () {
    $("#posts").prepend('<article class="post featured"><h2>Featured: Welcome to Our Blog</h2><p>Our featured post appears first.</p></article>');
  });

  $("#removePost").on("click", function () {
    $("#posts .post").last().remove();
  });

  $("#addTag").on("click", function () {
    const $firstPost = $("#posts .post").first();
    // before() inserts outside and before the selected post.
    $firstPost.before('<span class="tag">NEW</span>');
    // after() inserts outside and after the selected post.
    $firstPost.after('<span class="tag">Editor's Pick</span>');
  });

  $("#highlight").on("click", function () {
    // Highlight posts containing specified keywords.
    $("#posts .post").each(function () {
      const text = $(this).text().toLowerCase();
      if (text.includes("javascript") || text.includes("technology")) {
        $(this).css({ backgroundColor: "#fff0a6", border: "2px solid #d49a00" });
      }
    });
  });
});
