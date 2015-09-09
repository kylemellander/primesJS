describe("factorialArray", function() {

  it("returns array of all numbers leading to current number from 2 up", function() {
    expect(factorialArray(5)).to.eql([2,3,4,5])
  });

});

describe("primeNumbers", function() {

  it("returns array of all primes leading to current number", function() {
    expect(primeNumbers(5)).to.eql([2,3,5])
  });

  it("returns empty array for negative number", function() {
    expect(primeNumbers(-5)).to.eql([]);
  });

});
