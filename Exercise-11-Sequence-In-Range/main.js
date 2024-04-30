function printSequence(a, b, d) {
    if (d === 0 || a === b || (b < a && d > 0) || (a < b && d < 0)) {
        document.write('Nothing to print');
        return;
    }
    for (var x = a; Math.sign(d) * (x - b) < 0; x += d) {
        var sep = ', ';
        if (x === a) {
            sep = '';
        }
        document.write(sep + x);
    }
}

var a = Number(prompt('a:'));
var b = Number(prompt('b:'));
var d = Number(prompt('d:'));
printSequence(a, b, d);