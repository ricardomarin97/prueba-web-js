function betterPrecision(num, precision) {
    var stringifiedNum = num.toPrecision(precision);
    var index = stringifiedNum.indexOf('e');

    if (index !== -1) {
        var exp = Number(stringifiedNum.slice(index + 1));
        if (exp < 5) {
            return Number(stringifiedNum).toString();
        }
    }

    return stringifiedNum;
}

console.log(betterPrecision(124, 1));
console.log(betterPrecision(124, 2));
console.log(betterPrecision(178, 1));