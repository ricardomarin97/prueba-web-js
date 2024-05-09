function gcd(a, b) {
    if (a === 0 && b === 0) {
      return Infinity;
    }
  
    if (a === 0 || b === 0) {
      return a + b;
    }
  
    var limit = Math.min(a, b);
    var commonDivisor = 1;
  
    for (var i = 2; i <= limit; i++) {
      if (a % i === 0 && b % i === 0) {
        commonDivisor = i;
      }
    }
  
    return commonDivisor;
  }
  