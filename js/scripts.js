//Business Logic
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

function roboTalk(sentence, where, speed, i) {
  if (i < sentence.length) {
    where.append(sentence.charAt(i));
    i++;
    setTimeout(function() {
      roboTalk(sentence, where, speed, i);
    }, speed);
  }
}

//UI Logic
$(document).ready(function () {
  var userName = "";
  var userNumber = "";
  roboTalk("Greetings, human. I am designated is 'RoboBot' - you may call me 'Rob.' What is your designator?", $("div#prompt-name h3"), 50, 0);

  $("form#user-name").submit(function(event) {
    event.preventDefault();

    userName = $("input#name").val();
    $("div#prompt-name").hide();
    $("div#prompt-number").show();
    roboTalk("It is a pleasure to make your acquaintance, '" + userName + ".' What is your favorite number?", $("div#prompt-number h3"), 50, 0);
  });

  $("form#user-number").submit(function(event) {
    event.preventDefault();

    userNumber = $("input#number").val();
    var result = skynet(userNumber);
    console.log(result);
  });

});
