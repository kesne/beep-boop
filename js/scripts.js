//Business Logic

//UI Logic
$(document).ready(function () {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    
    var userNumber = $("input#number").val();
    alert("Your input was: " + userNumber);
  })
})
