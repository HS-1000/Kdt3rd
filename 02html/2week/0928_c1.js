const countNum = function() {
    let count = 7;
    //함수안에 정의된 변수
    console.log('count값 :',count);
}
countNum();
// console.log(count);->함수안에서 정의된 "지역"변수->Error
// 해당함수 안에서만 유효하다.
// 외부변수를 함수에서 사용하려면
// 그냥 사용하면 된다.
let count2 = 0;
function countNum2() {
    count2 = 71;
    // 재할당두 가능
    console.log(count2);
}
countNum2();
console.log(count2);
// 함수 내부에서 내할당 되서 변수의 값이 변했다.
// -> 함수 실행을 안하면 그대로
// 그냥 선언만해두 전역 변수

let color = "red";
function printColor() {
    let color = "green";
    console.log(color);
}
printColor();
console.log(color);
// 지역변수와 전역변수 이름이 같으면 함수 내부에서는 지역변수를
// 우선으로 사용

// 문자열 관련 함수
// 속성: length 문자열 길이
let str1 = "strawberry Moon";
let str2 = "   userID : 1124  "
console.log(str1.length);
/*
    str.function();
    toUpperCase() : 대문자로 변환
    toLowerCase() : 소문자로 변환
    trim() : 앞뒤의 여백 제거
*/
console.log(str1.toUpperCase());
console.log(str1);
console.log(str2);
console.log(str2.trim());
console.log(str2.trim().toUpperCase());
//여러함수를 연달아서 사용가능

console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9]);
// python 에서 str[a:b] -> str.substr(a, b);
//문자열 indexing 가능; 인덱싱된 문자두 string 타입

let fruit = "applemango";
let long = "longlong text is very long";

console.log(fruit.indexOf('a'));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf('x'));
//str.indexOf(str) -> 문자열안에서 입력문자열의 시작위치 찾기
console.log(fruit.slice(5));
//str.slice(index) -> 인덱스부터 문자열을 잘라서 리턴
console.log(fruit.slice(-2));
//음수 입력시 뒤부터 카운트
console.log(long.replace("long", "big"));
console.log(long.replaceAll("long", "big"));
//replace는 값을 찾아서 교체, replaceAll은 모든값 ...

let date = "2022.9.26";
console.log(date.replaceAll('.','-'));
console.log(date.slice(2).replaceAll('.','-'));


