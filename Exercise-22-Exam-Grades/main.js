var scoreStr = prompt('Enter the score:');
var score = Number(scoreStr);

if ((score !== parseInt(scoreStr)) || score < 0 || score > 100) {
    alert('Invalid value!');
}
else {
    var grade;
    if (score > 89) {
        grade = 'A';
    }
    else if (score > 74) {
        grade = 'B';
    }
    else if (score > 59) {
        grade = 'C';
    }
    else if (score > 49) {
        grade = 'D';
    }
    else {
        grade = 'E';
    }
    alert(grade);
}