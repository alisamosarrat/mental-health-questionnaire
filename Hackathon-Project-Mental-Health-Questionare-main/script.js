// 1. Genetics Section:
$(".genetics-button").click(function () {
  let geneticsInput = $(".genetics").val();

  // display this text if the answer is correct
  if (geneticsInput === "true") {
    $(".genetics-message").text(
      "Correct! Mental Ilnesses are a combination of multiple genetic and environmental factors."
    );
  } else {
    // display this text if the answer is incorrect
    $(".genetics-message").text("Incorrect!");
  }
});

// 2. Diet section
$(".diet-button").click(function () {
  let dietInput = $(".diet").val();
  if (dietInput === "yes") {
    $(".diet-message").text(
      "Correct! Having a balanced diet can improve gut health and keep you happy :)"
    );
  } else {
    $(".diet-message").text("Incorrect!");
  }
});

// 3. Sleep section
$(".sleep-button").click(function () {
  let sleepInput = $(".sleep").val();
  if (sleepInput === "yes") {
    $(".sleep-message").text(
      "Correct! Sleep is a way for your body to recharge and without sleep you tend to get more emotional."
    );
  } else {
    $(".sleep-message").text("Incorrect!");
  }
});

// 4. Social Media section
$(".media-button").click(function () {
  let mediaInput = $(".media").val();
  if (mediaInput === "true") {
    $(".media-message").text(
      "Correct! Comparing yourself to others on Social Media can have a harmful effect on your mental health."
    );
  } else {
    $(".media-message").text("Incorrect!");
  }
});


