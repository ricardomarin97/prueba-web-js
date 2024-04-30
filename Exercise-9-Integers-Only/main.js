var int = prompt('Enter an integer:');

while (Number(int) !== parseInt(int)) {
    alert('Invalid input');
    int = prompt('Enter an integer:');
}

document.write(int);