describe("findReplace", function () {
  it("will find all instances of a word in a string and replace it with another", function () {
    expect(findReplace("hi mom", "mom", "dad")).to.equal("hi dad");
  });

  it("will convert all input to lower case", function () {
    expect(findReplace("i lOVe yoU", "you", "burritos")).to.equal("i love burritos");
  });
});