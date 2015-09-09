describe("primeNumbers", function() {

  it("returns array of all primes leading to current number", function() {
    expect(primeNumbers(5)).to.eql([2,3,5])
  });

  it("returns empty array for negative number", function() {
    expect(primeNumbers(-5)).to.eql([]);
  });

});

describe("primeCheck", function() {

  it("returns true if prime number", function() {
    expect(primeCheck(5)).to.equal(true)
  });

  it("returns false if not a prime number", function() {
    expect(primeCheck(500)).to.equal(false)
  })

});
