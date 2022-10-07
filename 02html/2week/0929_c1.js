// let a = '0';

// switch (a) {
//     case 0, '0': // a === 0 이면 실행
//         console.log(false);
//         break;
        /* 또는 
        case 0:
        case '0':
            console.log(false);
            break;
        */
//     case 1, '1':
//         console.log(true);
//         break;
//     default:
//         console.log(NaN);
// }
// 들여쓰기가 python 과 비슷하다. break; 에 주의
// switch -> if
// if (a == 0) {
//     console.log(false);
// } else if (a == 1) {
//     console.log(true);
// } else {
//     console.log(NaN);
// }

// let grade = 'a';

// switch (grade) {
//     case 'A':
//         console.log('A');
//         break;
//     case 'B':
//         console.log('B');
//         break;
//     case 'C':
//         console.log('C');
//         break;
//     case 'D':
//         console.log('D');
//         break;
//     case 'E':
//         console.log('E');
//         break;
//     default:
//         console.log("Error");
// }
// 삼항 연산자 : 3개의 피연산자
// 조건식 ? (true일때) : (false일때)
/* 
if (num % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
-> (num%2 === 0) ? (console.log('even');) : (console.log('odd');)
*/
// let num = 3;
// (num%2 === 0) ? (console.log('even')) : (console.log('odd'));
// let hour = 16;
// console.log((hour >= 12) ? ('오후') : ('오전'));

// 반복문 for, while
/* 
for (초기값; 조건식; 증감값) {
    코드
    C하고 비슷
}
while (조건식) {
    코드
}
*/
// let i = 0;
// for (let i = 0; i <= 4; i++) {
//     console.log(i);
// }
// let sum = 0
// for (let i = 1; i<=10; i++) {
//     (i%2 == 0) ? (sum+=i) : NaN;
// }
// console.log(sum);
// js에서두 += -= 연산자가 유효한거 같다.
// let i = 0;
//for 안에서 let 으로 정의된 변수지만 영향없는거같다
// i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }
// i = 9;
// while (4 <= i && i <= 9) {
//     console.log(i);
//     i--;
//}
// A < x < B 는 A < x 의 bool 값이 B 와 비교되는거 같다
// 4 <= i(===9) <= 9 일때 무한반복되는 것은 4 <= i 는 bool 
// 에서 true, false 이고 이것을 number와 비교 하면 0 또는 1
// 로 계산 되는것으로 보인다. 그리고 0, 1 은 항상 9보다 작으므로
// 무한반복된다.
// i = 1; 
// while  (i <= 10) {
//     i%2==0 ? (console.log(i)) : (NaN);
//     i++;
//     // continue;
// }
// i = 10;
// while (i >= 1) {
//     i%2==1 ? (console.log(i)) : (NaN);
//     i--;
// }

// let go = confirm("continue?");
// console.log(go);

// let count = 0;
// while (true) {
//     if (confirm("continue?") === true) {
//         count += 1;
//         alert(`${count}번째 반복`);
//     } else {
//         break;
//     }
// }

// let n = 0;

for (let x = 2; x <= 9; x++) {
    console.log(`**** ${x}단 ****`);
    for(let y = 1; y <= 10; y++) {
        console.log(`${x} * ${y} = ${x*y}`);
    }






























}