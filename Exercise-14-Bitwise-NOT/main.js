function not(inputStr) {
    var outputStr = '';

    for (var i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === '1') {
            outputStr += '0';
        }
        else {
            outputStr += '1';
        }
    }
    return outputStr;
}