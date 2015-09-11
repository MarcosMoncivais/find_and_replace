describe('kiss', function() {

	it("will remove all punctuation and replaces uppercase letters with lowercase", function() {
		expect(kiss('NFL Football Starts Sunday!')).to.equal(nfl football starts sunday)
	});
});

describe('find_and_replace', function () {
	it("will find a word within a string and replace the word to a word of the users choosing", function() {
		expect(find_and_replace("Hi Mom", "Mom", "Dad")).to.equal("hi dad");
	});

	it("will replace multiple words of users choosing in string", function() {
		expect(find_and_replace("the raiders will lose", "will lose", "will win")).to.equal("the raiders will win");
	});
});