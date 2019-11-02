//Business Logic
var greeting = "Greetings, human. I am designated 'RoboBot' - you may call me 'Rob.' What is your designator?";
var badName = "' sounds more like a robot name. Perhaps it is you that is the robot, and I, the human?";

function numberGame(number, name) {
  if (isNaN(number) || number < 0 || (Math.floor(number) != number) || number > 120) {
    return "ERROR! Please enter a positive integer from 1 to 120."
  }
  var robotArray = [];
  for (var i = 0; i <= number; i++) {
    // Modified guidelines to make it a 2/3 chance the number will be changed
    if (Math.random() > 0.67) {
      robotArray.push(i);
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
  roboTalk(greeting, $("p#chat"), 50, 0);

  $("form#prompt-name").submit(function(event) {
    event.preventDefault();

    userName = $("input#name").val();
    $("p#chat").text("");
    if (/[^a-z ]/i.test(userName)) {
      roboTalk("'" + userName + badName, $("p#chat"), 50, 0);
    } else {
    $("form#prompt-name").hide();
    $("form#prompt-number").show();
    roboTalk("It is a pleasure to make your acquaintance, '" + userName + ".' Let us play a game. What is your favorite number?", $("p#chat"), 50, 0);
    }
  });

  $("form#prompt-number").submit(function(event) {
    event.preventDefault();

    userNumber = parseInt($("input#number").val());
    var result = numberGame(userNumber, userName);

    $("p#chat").text("");
    $("p#output").text("");
    roboTalk(result, $("p#output"), 2, 0);
  });

});
