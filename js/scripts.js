//Business Logic
function skynet(number) {
  var robotArray = [];
  for (var i = 0; i <= number; i++) {
    robotArray.push(i);
  }
  return robotArray;
}


//UI Logic
$(document).ready(function () {
  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var userNumber = $("input#number").val();
    var result = skynet(userNumber)
    console.log(result);
  });
});
