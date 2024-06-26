function logLetterFrequency(str) {
    const CODE_LOWERCASE_A = 'a'.charCodeAt();
    var letterCounts = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    str = str.toLowerCase();

    for (var i = 0, len = str.length; i < len; i++) {
        // If the character is a letter in the range a-z,
        // increment its count in the letterCounts array.
        if ('a' <= str[i] && str[i] <= 'z') {
            letterCounts[str[i].charCodeAt() - CODE_LOWERCASE_A]++;
        }
    }

    var output = '';
    for (i = 0, len = letterCounts.length - 4; i < len; i += 4) {
        output += `${String.fromCharCode(i + CODE_LOWERCASE_A)}: ${letterCounts[i]}    `
            + `${String.fromCharCode(i + 1 + CODE_LOWERCASE_A)}: ${letterCounts[i + 1]}    `
            + `${String.fromCharCode(i + 2 + CODE_LOWERCASE_A)}: ${letterCounts[i + 2]}    `
            + `${String.fromCharCode(i + 3 + CODE_LOWERCASE_A)}: ${letterCounts[i + 3]}\n`;
    }

    // Manually deal with the letters y and z.
    output += `y: ${letterCounts[24]}    `
        + `z: ${letterCounts[25]}`;

    console.log(output);
}