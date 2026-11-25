// Q6: Subscribe/unsubscribe and dynamically attach/detach click handlers.
$(function () {
  function showMessage(text) {
    // Dynamically update a message area in the DOM.
    $("#message").text(text).hide().fadeIn();
  }

  function topicClick() {
    showMessage("Selected topic: " + $(this).contents().filter(function(){return this.nodeType===3;}).text().trim());
  }

  // Delegated .on() also handles topics added later.
  $("#topics").on("click", ".topic", topicClick);

  $("#subscribe").on("click", function () {
    $("#status").text("Subscribed");
    showMessage("Subscription enabled. Notifications are ON.");
  });

  $("#unsubscribe").on("click", function () {
    $("#status").text("Unsubscribed");
    showMessage("Subscription disabled. Notifications are OFF.");
  });

  $("#addTopic").on("click", function () {
    const topic = $("#newTopic").val().trim();
    if (!topic) { showMessage("Please enter a topic name."); return; }
    // New topic receives the delegated click behavior automatically.
    $("#topics").append(`<div class="topic"></div>`);
    const $newTopic = $("#topics .topic").last();
    $newTopic.text(topic + " ").append('<button class="remove">Remove</button>');
    $("#newTopic").val("");
    showMessage(topic + " topic added.");
  });

  // .off() detaches the delegated topic click event from the chosen topic.
  $("#topics").on("click", ".remove", function (event) {
    event.stopPropagation();
    const $topic = $(this).parent();
    $topic.off("click");
    $topic.remove();
    showMessage("Topic removed.");
  });
});
