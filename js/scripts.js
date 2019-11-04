//Business Logic
function numberGame(number, name) {
  var robotArray = [];
  for (var i = 0; i <= number; i++) {
    // Modified guidelines to make it a ~5% chance a unique phrase is given
    if (Math.random() > 0.95) {
      robotArray.push("I am a stabbing robot.");
    } else if ((i + "").includes("3")) {
      robotArray.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
    } else if ((i + "").includes("2")) {
      robotArray.push("Boop!");
    } else if ((i + "").includes("1")) {
      robotArray.push("Beep!");
    } else {
      robotArray.push(i);
    }
  }
  return robotArray.join(" :: ");
}

function roboTalk(sentence, location, speed, i) {
  if (i < sentence.length) {
    location.append(sentence.charAt(i));
    i++;
    setTimeout(function() {
      roboTalk(sentence, location, speed, i);
    }, speed);
  }
}

//UI Logic
$(document).ready(function () {
  var userName = "";
  var userNumber = "";

  roboTalk("Greetings, human. I am designated 'RoboBot' - you may call me 'Rob.' What is your designator?", $("p#chat"), 50, 0);

  $("form#prompt-name").submit(function(event) {
    event.preventDefault();
    $("p").text("");

    userName = $("input#name").val();

    if (/[^a-z ]/i.test(userName)) {
      roboTalk("'" + userName + "' sounds more like a robot name. Perhaps it is you that is the robot, and I, the human?", $("p#chat"), 50, 0);
    } else {
      $("form#prompt-name").hide();
      $("form#prompt-number").show();
      roboTalk("It is a pleasure to make your acquaintance, '" + userName + ".' Let us play a game. What is your favorite number?", $("p#chat"), 50, 0);
    }
  });

  $("form#prompt-number").submit(function(event) {
    event.preventDefault();
    $("p").text("");

    userNumber = parseInt($("input#number").val());

    if ((isNaN(userNumber)) || (userNumber < 0) || (Math.floor(userNumber) != userNumber) || (userNumber > 130)) {
      roboTalk("ERROR! Please enter a positive integer from 0 to 130.", $("p#chat"), 25, 0);
    } else {
      var result = numberGame(userNumber, userName);
      roboTalk(result, $("p#output"), 2, 0);
    }
  });

  $("button#startOver").click(function() {
    $("p").text("");
    roboTalk("Your designator was wrong? What a silly human error. What is your true designator?", $("p#chat"), 50, 0);
    $("form#prompt-number").hide();
    $("form#prompt-name").show();
  });
});
