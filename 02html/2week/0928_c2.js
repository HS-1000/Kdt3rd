// 조건문 if- else if- else, switch
console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 1);
console.log(1 != 2);

console.log('1' == 1);
// true : ==, != 는 값만 비교함, 타입은 비교하지 않음
console.log('1' === 1);
console.log(1 === 2);
// 타입, 값 모두 같아야 true
// < > <= >= 비교 연산자 python 과 동일
// 논리 연산자 &&->and ||->or !->not
console.log(! true);
console.log(!false);
console.log(!!true);
console.log(! (1 + 0));
// 다른 연산에 붙여서 사용가능 우선순위 주의
if (! 5 > 3) {
    //if () {} 괄호가 필요하다
    console.log('bigger');
} else if (true*90 > 90) {
    // else if 는 여러개 사용가능
    console.log('bigger2');
} else {
    console.log('meow~');
}

let score = 50;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else if (0 < score < 60){
    console.log('F');
}
// A < num < B 사용 가능

let userId = "user";
let userPw = "1234";
let inputId = "user";
let inputPw = "1234";

if (userId == inputId) {
    if (userPw == inputPw) {
        console.log("로그인 완료!");
    } else {
        console.log("비밀번호가 틀렸습니다!");
    }
} else {
    console.log("아이디가 없습니다.");
}

const isEven = function(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

// let inputNum = prompt("자연수를 입력하세요");
// alert(isEven(inputNum));

const isValidate = function(pw1, pw2) {
    if (5 <= pw1.length <= 8){
        if (pw1 == pw2) {
            return '비밀번호 일치';
        } else {
            return '비밀번호 불일치';
        }
    } else {
        return '비밀번호는 5자리 이상 8자리 이하!!!'
    }
}
console.log(isValidate(1234, 1234));

const getColor = function(sign) {
    if (sign == "go") {
        return "green";
    } else if (sign == "slow") {
        return "yellow";
    } else {
        return "red";
    }
}
console.log(getColor("slow"));