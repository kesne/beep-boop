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

function typer(string, i) {
  if (i < string.length) {
    $("p").append(string.charAt(i));
    i++;
    setTimeout(function() {
      typer(string, i);
    }, 80);
  }
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
  $("form#user-number").submit(function(event) {
    event.preventDefault();


    roboTalk("This is my robot talk test sentence", $("p"), 60, 0);

    var userNumber = $("input#number").val();
    var result = skynet(userNumber)
    console.log(result);
  });
});
