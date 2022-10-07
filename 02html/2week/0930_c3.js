// Date, Math 내장? 오브젝트 -> 표준내장객체
let now = new Date();
// console.log(now);
//아무것두 넣지않으면 현재시간을 가져온다
let zero = new Date(1000);
console.log(zero);
//Date의 입력변수단위는 밀리초
//timestamp 0 기준
let sec = 1000;
let min = 60*sec;
let hour = new Date(26*min);
console.log(hour);

let time1 = new Date(2018, 2, 2);
// new Date(y, m, d, h, m, s, ms);
// y -> 4자리
// m -> 0~11 주의!
// d -> 1 ~ 31 , 기본값 1
console.log(time1);

console.log(now.getFullYear());
console.log(now.getMonth());
// 월은 0~11 인것 주의
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getDay());
//요일 : 0(일) ~ 6(토)

if (now.getDay() == 0 || now.getDay() == 6){
    console.log("주말!");
} else {
    console.log("평일");
}

//Math
console.log(Math.E);
console.log(Math.SQRT2);
// 루트2

console.log(Math.min(100, 200, 7));
// array입력은?

console.log(Math.round(6.5));
console.log(Math.round(6.3));//반올림
console.log(Math.floor(6.3));//내림
console.log(Math.ceil(6.5));//올림
console.log(Math.floor(Math.max(1.1,2.1,7.7)));
//당연히 다중사용 가능

console.log(Math.random());
// 0~1사이 랜덤
console.log(Math.floor(10*Math.random()));
// 0,1,2, ... , 9의 랜덤
// Math.floor(A*Random() + B); -> B, B+1, ... , A+B-1 의 랜덤
console.log(Math.floor(10*Math.random()+1));
// int from 1 to 10
console.log(Math.floor(100*Math.random()+1));
// int from 1 to 100
console.log(Math.floor(3*Math.random()+20));
// int from 20 to 22
