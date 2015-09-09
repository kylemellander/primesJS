function factorialArray(num) {
  var array = []

  if (num >= 2) {
    for(var i = 2; i <= num; i++) {
      array.push(i)
    }
  }
  return array;
};

function primeNumbers(num) {
  var array = factorialArray(num);
  var primes = [];

  for(var i = 0; i < array.length; ++i) {
    var prime = true;
    for(var j = 0; j < i; ++j) {
      if (array[i] % array[j] === 0) {
        prime = false;
      }
    }
    if (prime) {
      primes.push(array[i])
    }
  }

  return primes;
};

function primeNumberOutput(num) {
  return primeNumbers(num).join(", ")
}

function primeCheck(num) {
  if (num < 2) {
    return false;
  };

  var root = Math.floor(Math.sqrt(num));

  for(var i=2; i < root; ++i) {
    if ( num % i === 0 ) {
      return false;
    }
  };

  return true;
};
