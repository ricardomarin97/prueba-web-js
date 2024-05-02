function endsWithPolyfill(str, substr, length) {
    if (!length) length = str.length;
    return str.slice(length - substring.length, length) === substr;
}