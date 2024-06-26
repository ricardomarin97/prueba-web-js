function getStatusCodeClass(statusCode) {
    switch (statusCode[0]) {
        case '1':
            return 'Informational';
        case '2':
            return 'Successful';
        case '3':
            return 'Redirect';
        case '4':
            return 'Client Error';
        case '5':
            return 'Server Error';
    }
}

function isDigit(char) {
    return '0' <= char && char <= '9';
}

function isFirstDigitInRange(statusCode) {
    return '1' <= statusCode[0] && statusCode[0] <= '5';
}


var statusCode = prompt('Enter status code:');

if (statusCode.length !== 3) {
    alert('Invalid code length.');
}
else if (!isDigit(statusCode[0]) || !isDigit(statusCode[1]) || !isDigit(statusCode[2])) {
    alert('Each character must be a digit.');
}
else if (!isFirstDigitInRange(statusCode)) {
    alert('First digit not in range 1-5.');
}
else {
    // The input was valid, hence we must make the desired output.
    alert(getStatusCodeClass(statusCode));
}