function min(arr) {
    var minValue = Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return minValue;
}