function stringSplit(str, delimiter) {
    var substrings = [];
    var len = str.length;

    if (delimiter === '') {
        for (var i = 0; i < len; i++) {
            substrings.push(str[i]);
        }
        return substrings;
    }

    var index = 0; // The index-tracking variable.
    var indexOfValue; // The value returned by indexOf().
    var delimiterLength = delimiter.length;

    while ((indexOfValue = str.indexOf(delimiter, index)) !== -1) {
        substrings.push(str.slice(index, indexOfValue));
        index = indexOfValue + delimiterLength;
    }
    substrings.push(str.slice(index));

    return substrings;
}