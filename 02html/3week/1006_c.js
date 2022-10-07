const chgInput = document.querySelector("#change_input");
console.log(chgInput);
chgInput.addEventListener('input', function() {
    // 입력창에 변경이 일어나는 이벤트 input
    let inputDiv = document.querySelector(".intro");
    inputDiv.textContent = chgInput.value;
});
// 실시간으로 입력을 출력하는 기능은 input 말고도 textarea 에서두 가능하다

const keyInput = document.querySelector("#key_input");
keyInput.addEventListener('keydown', function(event) {
    // 키가 내려갔을때
    // console.log(event.code);
    (event.code === "Enter") ? (console.log(true)) : console.log(false);
});