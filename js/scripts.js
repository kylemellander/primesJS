function primeNumbers(num) {
  var primes = [];

  for(var i = num; i >= 2; --i) {
    if (primeCheck(i)) {
      primes.push(i)
    }
  }

  return primes.reverse();
};

function primeNumberOutput(num) {
  return primeNumbers(num).join(", ")
}

function primeCheck(num) {
  if (num < 2) {
    return false;
  };

  var root = Math.floor(Math.sqrt(num));

  for(var i=2; i <= root; ++i) {
    if ( num % i === 0 ) {
      return false;
    }
  };

  return true;
};
