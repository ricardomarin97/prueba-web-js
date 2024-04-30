var x = Number(prompt('x:'));
var y = Number(prompt('y:'));
var op = prompt('Operation:');

switch (op) {
    case 'a':
        document.write(x + ' + ' + y + ' = ' + (x + y));
        break;
    case 's':
        document.write(x + ' - ' + y + ' = ' + (x - y));
        break;
    case 'm':
        document.write(x + ' * ' + y + ' = ' + (x * y));
        break;
    case 'd':
        document.write(x + ' / ' + y + ' = ' + (x / y));
        break;
    case 'e':
        document.write(x + ' ** ' + y + ' = ' + (x ** y));
        break;
    case 'r':
        document.write(x + ' % ' + y + ' = ' + (x % y));
        break;
    default:
        document.write('Unknown operation');
}