let nameSelecter = document.getElementsByName("userid");
console.log(nameSelecter);
console.log(nameSelecter[0].value);
// CSS 속성으로 name 속성 접근
let qs = document.querySelector('input[name="userid"]');
// console.log(qs);

// 본격 document 요소 다루기->읽고 쓰고
let div1 = document.getElementById("one");
let text1 = document.getElementById("hello");
// console.log(div1);

let isBtnClick = 0;
console.log('btn', isBtnClick);
//innerHTML 요소의 코드를 가져오거나 수정
function action_btn() {
    let divX = document.getElementById('two');
    divX.innerHTML = "2. 추가된 텍스트";


}

// div1.innerHTML = "1 : <b>첫번쩨</b> 태그입니다. &hearts;";

//innerText : 요소안의 텍스트를 가져나오거나 수정
console.log(text1.innerText);
text1.innerText = "<br>웨엉~";

//innerText 와 비슷한 textContent
//이게 나중에 등장해서 IE9 이전버전에서 사용불가 -> 그럴일이 있을까 
console.log(text1.textContent);
text1.textContent = "meow~";

//속성으로
let imgCat = document.getElementById("cat1");
console.log(imgCat.id);
imgCat.src = "../1week/img/meow.jpg";

let googleLink = document.getElementById("google");
googleLink.target = "_blank";
console.log(google.getAttribute('href'));
// google.setAttribute('href', 'https://www.google.com/maps');
//CSS 접근
googleLink.style.fontSize = "2rem";
googleLink.style.textDecoration= "none";
googleLink.style.border = '4px solid black';
googleLink.style.textShadow = '2px 2px 10px #f005';
// console.log(googleLink.style[0]);

let divs = document.querySelectorAll('div');
// console.log(divs);
// let n = divs[0];
// for(let i = 1; i <= divs.length; n=divs[i++]) {
//     console.log(n);
//     n.style.color = 'rgb(0, 100, 200)';
// }

// for (let 반복변수 of 배열) {}
// for (let divX of divs) {
//     console.log(divX);
//     divX.style.color = "blue";
// }

// 클래스 제어 방식 (이게 주류다)
// classList. +
// add() remove() toggle()->있으면 제거, 없음 추가 contains()->해당 클래스가 있는지
for (let divX of divs) {
    divX.classList.add("blueText");
}
for (let divX of divs) {
    divX.classList.toggle("blueText");
}
const addNode = function() {
    // alert(true);
    let div1 = divs[0];
    let p = document.createElement('p'); // <p></p> 생성
    p.innerText = "p태그 버튼을눌러";
    p.classList.add("append_p");
    div1.appendChild(p);
    // div1.append(p);
}
const removeNode = function() {
    let div1 = divs[0];
    let p = document.querySelector("#one > .append_p");
    div1.removeChild(p);
    // p.remove();
}

let endText = document.createElement('div');
endText.innerText = "bye~";
document.body.append(endText);
// 요소 생성, 추가
