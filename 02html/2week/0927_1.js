let no_1, no_2, no_3;
no_1 = 2;
no_2 = 5;
no_3 = 7;

const add = function(num1, num2, num3) {
    let answer = no_1 + no_2 + no_3;
    console.log(answer);
    alert(answer);
}
// no_1,no_2,no_3 == 2,5,7
add(no_1, no_2, no_3);

const sub = function(num1, num2) {
    let answer = no_1 - no_2;
    console.log(answer);
    alert(answer);
}

sub(no_1, no_2);

const divide = function(num1, num2) {
    let answer = num1 / num2;
    console.log(answer);
    alert(answer);
}

divide(no_1, no_2);

const mul = function(num1, num2) {
    let answer = num1 * num2;
    console.log(answer);
    alert(answer);
}

mul(no_1, no_2);
