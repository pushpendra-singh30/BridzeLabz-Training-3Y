// Q10: Client-side registration validation with jQuery.
$(function () {
  // Demo list represents emails already registered; a real app checks the server/database.
  const registeredEmails = ["existing@example.com", "admin@example.com"];

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim().toLowerCase();
    const password = $("#password").val();
    let valid = true;

    // Reset previous validation styles before checking again.
    $("input").css("border", "1px solid #aaa");
    $("#message").removeClass("success error").text("");

    function markInvalid(selector, message) {
      $(selector).css("border", "2px solid red");
      $("#message").addClass("error").text(message);
      valid = false;
    }

    if (!name) markInvalid("#name", "Please enter your name.");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      markInvalid("#email", "Please enter a valid email address.");
    } else if (registeredEmails.includes(email)) {
      markInvalid("#email", "This email is already registered.");
    }

    if (password.length < 8) {
      markInvalid("#password", "Password must contain at least 8 characters.");
    }

    if (valid) {
      $("#message").removeClass("error").addClass("success")
        .text("Registration successful! Welcome, " + name + ".");
      this.reset();
      $("input").css("border", "1px solid #aaa");
    }
  });
});
