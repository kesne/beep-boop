//Business Logic
const greeting = "Greetings, human. I am designated 'RoboBot' - you may call me 'Rob.' What is your designator?";

function skynet(number) {
  var robotArray = [];
  var tester = "";
  for (var i = 0; i <= number; i++) {
    tester = i + "";
    if (tester.includes("3")) {
      robotArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (tester.includes("2")) {
      robotArray.push("Boop!");
    } else if (tester.includes("1")) {
      robotArray.push("Beep!");
    } else {
    robotArray.push(i);
    }
  }
  return robotArray;
}

function roboTalk(sentence, speed, i) {
  if (i < sentence.length) {
    $("div#speech p").append(sentence.charAt(i));
    i++;
    setTimeout(function() {
      roboTalk(sentence, speed, i);
    }, speed);
  }
}

//UI Logic
$(document).ready(function () {
  var userName = "";
  var userNumber = "";
  roboTalk(greeting, 60, 0);

  $("form#prompt-name").submit(function(event) {
    event.preventDefault();

    userName = $("input#name").val();
    $("form#prompt-name").hide();
    $("form#prompt-number").show();
    $("div#speech p").text("");
    roboTalk("It is a pleasure to make your acquaintance, '" + userName + ".' What is your favorite number?", 50, 0);
  });

  $("form#prompt-number").submit(function(event) {
    event.preventDefault();

    userNumber = $("input#number").val();
    var result = skynet(userNumber);
    console.log(result);
  });

});
