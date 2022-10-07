// 계층이동
// 부모, 자식, 형제
const cookie = document.querySelector("li");
console.log(cookie.parentElement);
//부모노드
const dessert = document.querySelector("ul");
console.log(dessert.children);
//자식노드; 배열
const lists = document.querySelectorAll("li");
const cake = lists[1];
console.log(cake.previousElementSibling);
console.log(cake.nextElementSibling);

// 이벤트 종류
// click dblclick mouseover keydown keyup
// form event: input submit
// 리스너는 이벤트가 발생했을때
// 인라인방식
// onXX 속성방식
// addEventListener() 메소드 방식
let btn2 = document.querySelector("#btn2");
btn2.onclick = function() {
    alert("속성방식");
}
let btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', function () {
    alert("이벤트 리스너");
});
// addEventListener(이벤트 타입, 함수)

let tag1 = document.getElementById('tag1');
tag1.ondblclick = function() {
    tag1.style.fontWeight = "700";
    tag1.style.color = "gold";
}
let tag2 = document.getElementById('tag2');
tag2.addEventListener('mouseover', function() {
    tag2.style.color = "pink";
    tag2.style.fontWeight = "700";
})
//function 자리에 이미 정의된 함수 대입가능
const ul = document.querySelector('.todos');
let todoForm = document.querySelector("#todo-form");
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.querySelector('input[name="todo"]');
    // preventDefault는 브라우저에서 구현된 기본 동작 취소
    console.dir(todoInput);
    let todo = todoInput.value;
    const newTodo = document.createElement('li');
    newTodo.textContent = todo;
    ul.append(newTodo);
    todoInput.value = '';
})
// 이벤트 발생 -> 브라우저는 이벤트 정보를 담은 이벤트 객체를 리스너에게 전달
let clickMe = document.querySelector("#clickMe");
clickMe.addEventListener('click', function(event) {
    console.log(event);
})