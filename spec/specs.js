describe("find", function() {
	it('checks to see if two words match', function(){
		expect(find("poop", "poop")).to.equal(true)
	});
});

describe("findReplace", function () {
  it("match a word and replace it with another", function () {
    expect(findReplace("mom", "mom", "dad")).to.equal("dad");
  });

  it("will find all instances of a word in a string and replace it with another", function () {
    expect(findReplace("hi mom wsup", "mom", "dad")).to.equal("hi dad wsup");
  });

  it("replaces a word that occurs multiple times in a sentence", function () {
    expect(findReplace("i love love you", "love", "hate")).to.equal("i hate hate you");
  });

  it("replaces a word with another word, even when followed by punctuation", function () {
    expect(findReplace("i love you!", "you", "him")).to.equal("i love him!");
  });

//capitalization
//partial: "hello", "he", -> should not match
//negative cases: "hi how are you", for "banana" -> error? unmodifed sentence?
});
