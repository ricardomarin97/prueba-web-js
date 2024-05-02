function getWords(str) {
    if (str === '') {
        return [];
    }

    var words = [];
    var index = 0;
    for (var i = 0, len = str.length; i < len; i++) {
        if ('A' <= str[i] && str[i] <= 'Z'
            && ('a' <= str[i - 1] && str[i - 1] <= 'z'
                || 'a' <= str[i + 1] && str[i + 1] <= 'z')) {
            words.push(str.slice(index, i));
            index = i;
        }
    }
    words.push(str.slice(index));

    return words;
}