var findReplace = function (string, wordOne, wordTwo) {
  var string = string.toLowerCase();
  var splitString = string.split(" ");


  for(var i = 0; i < splitString.length; i++) {
    if(splitString[i] === wordOne) {
      splitString[i] = wordTwo;
    }
  }
  string = splitString.join(" ");
  return output;

};

$(document).ready(function(){
  $("form#findreplace").submit(function(event) {
    var string = $("input#string").val();
    var wordOne = $("input#wordOne").val();
    var wordTwo = $("input#wordTwo").val();
    var output = findReplace(string, wordOne, wordTwo);
    $(".output").text(output);
    event.preventDefault();
  });

});
