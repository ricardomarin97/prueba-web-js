while (true) {
    var word = prompt('Enter a hyphenated word:');

    if (word.indexOf('-') !== -1) {
        var words = word.split('-');
        for (var i = 0; i < words.length; i++) {
            document.write(words[i] + '<br>');
        }
        break;
    }

    else alert('Invalid input!');
}