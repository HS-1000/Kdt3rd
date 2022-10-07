const rectangle = function(num1, num2) {
    return num1*num2;
}
const triangle = function(num1, num2) {
    return num1*num2/2;
}
const circle = function(num1) {
    const pi = 3.141592;
    return pi*(num1**2);
}
let answer = rectangle(10, 5);
console.log(answer);
answer = triangle(4, 3);
console.log(answer);
answer = circle(10);
console.log(answer);
