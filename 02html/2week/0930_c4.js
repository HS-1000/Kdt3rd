// DOM
// HTML 의 요소나 속성 을 변경, 제거
// CSS 변경
// HTML 이벤트 반응
// 누구를 선택해서 ...
// Document 도 객체
// Document.body, Document.title, ... 같이 접근 가능
// 
// 
// 
// 
// 

console.log(document.documentElement);
//html 태그 반환
console.log(document.head);
console.log(document.body);
// 각각 태그 반환
console.log(document.URL);
// 페이지 전체 url
console.log(document.domain);
// 도메인만 반환
// https://search.naver.com -> 도메인
// https://search.naver.com//search? .... -> url

// DOM요소선택하기 (DOM API)
console.log(document.getElementById("first"));
// 아이디는 유일하므로 찾는 속도가 가장 빠르다
console.log(document.getElementById("second"));
console.log(document.getElementById("third"));
console.log(document.getElementById("fourth"));
console.log(document.getElementById("fifth"));

console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsick'));
console.log(document.getElementsByClassName('dessert'));
// 클래스는 여러개니까 배열로 가져온다

console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('ul'));
console.log(document.getElementsByTagName('li'));

//quertSelector -> CSS선택자로 가죠오기
console.log(document.querySelector('.korean'));
// 일치하는 첫번쩨만 가져온다. 그리고 입력되는 선택나는
// CSS선택자
console.log(document.querySelectorAll('.korean'));
// 이것은 모두 가져온다(배열)
console.log(document.querySelectorAll('.lunch-list #third:hover'));
let idFirst = document.getElementById('first');
console.log(idFirst);
