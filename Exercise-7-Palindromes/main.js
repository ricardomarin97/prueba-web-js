function isPalindrome(word) {
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) return false;
    }
    return true;
}

var word = prompt('Enter a word:');
if (isPalindrome(word)) {
    document.write("Yes, '" + word + "' is a palindrome.");
}
else {
    document.write("No, '" + word + "' is not a palindrome.");
}