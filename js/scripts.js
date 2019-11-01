//Business Logic
const greeting = "Greetings, human. I am designated 'RoboBot' - you may call me 'Rob.' What is your designator?";

function arrayMaker(number, name) {
  if (isNaN(number) || number < 0 || (Math.floor(number) != number)) {
    return "ERROR! Please enter a positive integer from 1 to 1000"
  }
  var robotArray = [];
  var tester = "";
  for (var i = 0; i <= number; i++) {
    tester = i + "";
    if (tester.includes("3")) {
      robotArray.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
    } else if (tester.includes("2")) {
      robotArray.push("Boop!");
    } else if (tester.includes("1")) {
      robotArray.push("Beep!");
    } else {
    robotArray.push(i);
    }
  }
  var result = robotArray.join(" :: ");
  return result;
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
    $("form#prompt-name").hide();
    $("form#prompt-number").show();
    $("p#chat").text("");
    roboTalk("It is a pleasure to make your acquaintance, '" + userName + ".' Let's play a game. What is your favorite number?", $("p#chat"), 50, 0);
  });

  $("form#prompt-number").submit(function(event) {
    event.preventDefault();

    userNumber = parseInt($("input#number").val());
    var result = arrayMaker(userNumber, userName);

    $("p#chat").text("");
    roboTalk(result, $("p#output"), 3, 0);
  });

});
