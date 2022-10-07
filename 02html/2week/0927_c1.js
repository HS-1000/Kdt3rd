console.log("in js file");
// console.log("body>script")
//한줄주석
/*
    여러줄
    주석
*/
// alert("Hello");
// var id = prompt("Id : ", "user");
// 입력기능, 두번쩨 인자는 default
// 변수선언시 웬만하면 재선언 하지말기
// var은 괜찮지만 let은 오류를 일으킨다
// 변수선언전에 값 할당가능 -> 유지보수가 어렵다.
// alert(id);
// confirm("오늘점심?");
// 확인, 취소 선택 가능
// 다른 언어처럼 콘솔에서두 입력가능

// let c;
// console.log(c); //undefined
// c = 4;
// console.log(c);
//let c; -> 중복선언 불가 ; 재할당은 가능 
// c = 5;
// console.log(c)

// const pi = 3.141592;
//재할당 재선언 불가-> 안변하는값
//선언만 하는것은 불가-> 재할당이 불가능하기
//변수, 상수 -> 특수문자는 _, $ 만 사용가능

//변수타입 
// string, number, boolean, null, undefined
// dictionary, array

let t1 = "123";
let t2 = "456";
//백팁 사용
console.log(`${t1} ABC ${t2}`);
let num1 = 11;
//var result = t1 - num1; -> return NaN; 숫자가 아닌걸 숫자로 
//계산하려하면 NaN

//boolean -> true, false

//null -> 빈값이다. 타입이 있지만 값은없다. 값이 없음을 명시할때

//undefined -> 값, 타입 모두 없음 ; null과 같은것은 아니다

// 자료형을 확인하려면 typeof(변수);
console.log(typeof(null));
//null은 원래 object는 아니지만 js의 공식적 오류이다

console.log(typeof(String(num1)));
console.log(Number(null));
console.log(typeof Number(t1));
console.log(parseInt(t1, 10));
//parseInt의 경우 두번쩨 파라미터로 10진수 라는것을 알려주는게 좋다

// 연산자
// ** 거듭제곱 3**2 == 9, % 나머지 연산

console.log(t1*2);

function getID() {
    return prompt("ID :", "user");
}
const alertNum = function(num) {
    alert(num);
}
let id;
// id = getID();
// alert(id);
alertNum(555);

let hello4 = function(name, text) {
    console.log(`hello i'm ${name}, ${text}`);
}

hello4("name", "야양ㅇ아아앙아앙아아아ㅏ");