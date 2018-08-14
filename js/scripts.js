
var noRecFactorial = function(a) {
  var result = 1;
  for(var i=1;i<=a;i++) {
    result *= i;
  }
  return result;
};

var withRecFactorial = function(b) {
  var result = 1;
  for(;b!==0;b--) {
    result *= b;
  }
  return result;
};

$(document).ready(function() {

  $("#factorial-method").submit(function(event) {

    var toOutput = noRecFactorial($("#numInput").val());
    var otherOutput = withRecFactorial($("#numInput").val());
    $('#output').text(toOutput);
    $('#output').append("<br>" + otherOutput);
    $("#result").show();

    event.preventDefault();
  });
});
