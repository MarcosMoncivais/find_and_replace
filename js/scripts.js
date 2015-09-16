//check to see if word shows in user input form get-go
var find = function (wordOne, wordTwo) {
	if (wordOne === wordTwo) {
		return true;
	} else {
		return false;
	}
};

//OMG JUST GOT THIS PASSING
var findReplace = function(sentence, wordFind, wordReplace) {
	var userInput = sentence.split(" ");
	for (var i = 0; i < userInput.length; i++) {
		// if (userInput[i] === wordFind) {
	 	//     userInput[i] = wordReplace;
		// }
		if (find(userInput[i], wordFind)) {
	  		userInput[i] = wordReplace;
		}
	}
	var resultString = userInput.join(" ");
	if (resultString === sentence) {
		return "nope!";
	} else {
		return resultString;
	}
};

$(document).ready(function(){
  $("form#findReplace").submit(function(event) {

    var sentence = $("input#sentence").val();
    var wordFind = $("input#wordFind").val();
    var wordReplace = $("input#wordReplace").val();

    var newSentence = findReplace(sentence, wordFind, wordReplace);

	$(".newSentence").text(newSentence);
    $(".result").show();
    event.preventDefault();
  });

});
