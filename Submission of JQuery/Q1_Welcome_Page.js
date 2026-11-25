// Q1: Set a greeting based on the visitor's local time.
$(document).ready(function () {
  const hour = new Date().getHours();
  let greetingText;

  if (hour < 12) greetingText = "Good morning!";
  else if (hour < 17) greetingText = "Good afternoon!";
  else greetingText = "Good evening!";

  $("#greeting").text(greetingText);

  // Replace the time-based greeting with a motivational quote.
  $("#changeGreeting").on("click", function () {
    $("#greeting").text("Believe in yourself. Every small step moves you forward!");
  });

  // Toggle welcome message visibility.
  $("#toggleWelcome").on("click", function () {
    $("#welcome").toggle();
    $(this).text($("#welcome").is(":visible") ? "Hide Welcome Message" : "Show Welcome Message");
  });

  // Clicking the greeting displays an alert.
  $("#greeting").on("click keypress", function (event) {
    if (event.type === "click" || event.key === "Enter") {
      alert("You clicked the greeting. Welcome!");
    }
  });
});
