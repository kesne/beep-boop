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

function typer(array, i) {
  if (i < array.length) {
    $("p").append(array[i]);
    i++;
    setTimeout(function() {
      typer(array, i);
    }, 100);
  } else {
    return;
  }
}

//UI Logic
$(document).ready(function () {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var array = "This is a test string".split("");
    alert(array);

    typer(array, 0);





    var userNumber = $("input#number").val();
    var result = skynet(userNumber)
    console.log(result);
  });
});
