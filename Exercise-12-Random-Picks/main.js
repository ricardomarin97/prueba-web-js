function randomPick(a, b, d) {
    if (d === 0 || a === b || (b < a && d > 0) || (a < b && d < 0)) {
        return null;
    }
    var randomIndex = Math.floor(Math.random() * Math.ceil((b - a) / d));
    return a + d * randomIndex;
}

randomPick(1, 10, 1);
randomPick(1, 10, 1)