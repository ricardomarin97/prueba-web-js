function toTitleCase(str) {
    var words = str.split(' ');

    for (var i = 0, len = words.length; i < len; i++) {
        words[i] = words[i] && words[i][0].toUpperCase() + words[i].slice(1);
    }

    var titleCasedStr = words[0];
    for (i = 1; i < len; i++) {
        titleCasedStr += ' ' + words[i];
    }

    return titleCasedStr;
}