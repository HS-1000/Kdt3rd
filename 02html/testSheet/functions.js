const getValueById = function(inputId) {
    let inputTag = document.getElementById(inputId);
    let inputVal = inputTag.value;
    return inputVal;
}
// will replace tag2value function
const sumCheckboxBySelector = function(boxSelector) {
    let boxs = document.querySelectorAll(boxSelector);
    let answer = 0;
    for (let box of boxs) {
        box.checked ? answer+=1 : null;
    }
    return answer;
}
const tag2value = function(element) {
    //일부tag 값의 예외를 다루기위한 함수
    let answer;
    if(element.tagName == "INPUT") {
        if(element.type == "checkbox") {
            answer = Number(element.checked);
        } else {
            answer = element.value;
        }
    } else {
        answer = element.innerText;
    }    
    // return answer;
    // 문자열 판별을 위해 수정됨
    if(Number(answer) == answer) {
        return Number(answer);
    } else {
        return answer;
    }
}
let nums = [1,2,3,4,5,6];
const arraySwap = function(array, index1, index2){
    // array의 두원소 위치 교환
    // 사용안됨    
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
const arrayInsert = function(array, index, value) {
    // 배열의 특정index에 샵입
    let answer = [];
    for(let i=0; i<array.length; i++) {
        if(i == index) {
            answer.push(value);            
        }
        answer.push(array[i]);
    }
    return answer;
}
const sortElementBySelector = function(selector, oprandSelector) {
    // selector : 정렬대상의 공통 querySelector
    // oprandSelector : 정렬할 기준의 공통 querySelector
    let targetTags = document.querySelectorAll(selector);
    let oprandTags = document.querySelectorAll(oprandSelector); 
    let size = targetTags.length;
    let map = [0];
    let index;
    for(let index=1; index<size; index++) {
        for(let mapIndex=0; mapIndex<=map.length; mapIndex++) {
            if(mapIndex == map.length) {
                map.push(index);
                break;
            }
            if(tag2value(oprandTags[index]) < tag2value(oprandTags[map[mapIndex]])) {
                map = arrayInsert(map, mapIndex, index);
                break;
            }
        }
    }
    let targetTagsHTML = [];
    for (let i=0; i<map.length; i++) {
        targetTagsHTML.push(targetTags[i].innerHTML);
    }
    for (let i=0; i<map.length; i++) {
        targetTags[i].innerHTML = targetTagsHTML[map[i]];
    }
}
const elementsReverseBySelector = function(selector) {
    let targetTags = document.querySelectorAll(selector);
    let reversedTagsHTML = [];
    for(let i=targetTags.length-1; i>=0; i--) {
        reversedTagsHTML.push(targetTags[i].innerHTML);
    }
    for(let i=0; i<targetTags.length; i++) {
        targetTags[i].innerHTML = reversedTagsHTML[i];
    }
}

// 여기서부터 예시를 위한 코드

let sortBtn = document.getElementById('div_sort');
sortBtn.addEventListener('click', function() {
    console.log(1);
    sortElementBySelector('.sortTest div', '.sortTest div');
});
let likeSortBtn = document.getElementById('like_sort');
likeSortBtn.addEventListener('click', function() {
    sortElementBySelector('.img_card', '.img_card>div>span');
});
let divReverse = document.getElementById('div_reverse');
divReverse.addEventListener('click', function() {
    elementsReverseBySelector('.sortTest div');
});
let likeReverse = document.getElementById('like_reverse');
likeReverse.addEventListener('click', function() {
    elementsReverseBySelector('.img_card');
});