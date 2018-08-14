
var factorial = function(a) {
  var result = 1;
  for(var i=1;i<=a;i++) {
    result *= i;
  }
  return result;
}


$(document).ready(function() {

  $("#factorial-method").submit(function(event) {
    var toOutput = factorial($("#numInput").val());

    $('#output').text(toOutput);
    $("#result").show();

    event.preventDefault();
  });
});
