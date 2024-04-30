function factorial(n) {
    if (typeof n !== 'number') {
       return null;
    }
 
    var result = 1;
    for (var i = 2; i <= n; i++) {
       result = result * i;
    }
    return result;
 }