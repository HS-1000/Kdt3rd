const getValueById = function(inputId) {
    let inputTag = document.getElementById(inputId);
    let inputVal = inputTag.value;
    return inputVal;
}
const sumCheckboxBySelector = function(boxSelector) {
    let boxs = document.querySelectorAll(boxSelector);
    let answer = 0;
    for (let box of boxs) {
        box.checked ? answer+=1 : null;
    }
    return answer;
}
const tableSort = function(tableTag, baseLine) {
    //tableTag : 테이블테그 객체
    //baseLine : 왼쪽부터 1
    let haveTh = false;
    let nowLine = tableTag.children[0].children[0].children;
    console.log(nowLine);
}
tableSort(document.querySelector("table"), 0);



