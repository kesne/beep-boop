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

function typer(string) {
  for (var i = 0; i < string.length; i++) {
    $("p#test").append(string.charAt(i));
  }
}


//UI Logic
$(document).ready(function () {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var test = "this is a test string";
    var i = 0;
    typer(test, i);

    var userNumber = $("input#number").val();
    var result = skynet(userNumber)
    console.log(result);
  });
});
