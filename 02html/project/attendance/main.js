// let dropZone = document.getElementById("drop_zone");
// dropZone.addEventListener("dragleave", function(event){
//   event.preventDefault();
//   dropZone.style.backgroundColor = 'inherit';

// });
// dropZone.addEventListener("dragover", function(event){
//   event.preventDefault();
//   dropZone.style.backgroundColor = 'gray';
//   event.dataTransfer.dropEffect = "none";
  
// });
// dropZone.addEventListener("dragend", function(){
//   console.log("drop");
// });
const makeTableLine = function(dataArray) {
  let head = document.getElementById('table_functions');
  // head.children[4].classList.remove('checked');
  let line = document.createElement('div');
  let lineCh0 = document.createElement('div');
  lineCh0.innerText = dataArray[0];
  lineCh0.classList.add('col0');
  let lineCh1 = document.createElement('div');
  
  lineCh1.innerText = dataArray[1];
  lineCh1.classList.add('col1');
  let lineCh2 = document.createElement('div');
  
  lineCh2.innerText = dataArray[2];
  lineCh2.classList.add('col2');
  let lineCh3 = document.createElement('div');
  
  lineCh3.innerText = dataArray[3];
  lineCh3.classList.add('col3');
  let lineCheck = document.createElement('div');
  lineCheck.classList.add('check_box');
  lineCheck.innerHTML = '&check;<span class="check_val hidden">0</span>';
  for(let c of head.classList) {
    line.classList.add(c);
  }
  line.append(lineCh0, lineCh1, lineCh2, lineCh3, lineCheck);
  return line;

}

const contentsBox = document.getElementById("contents");

let tableHead = document.querySelectorAll("#table_functions div");
let sortIndex = -1;
const readExcel = function(event) {
  let input = event.target;
  let reader = new FileReader();
  contentsBox.innerHTML = '';
  
  reader.onload = function () {
    let data = reader.result;
    let workBook = XLSX.read(data, { type: 'binary' });
    let fileData = [];
    workBook.SheetNames.forEach(function (sheetName) {
        // console.log('SheetName: ' + sheetName);
        let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        fileData = rows;
    })
    let rowKeys;
    let count = 0;
    
    for(let row of fileData) {
      rowKeys = Object.keys(row);
      strings = ['','','',''];
      for(let i=0; i<rowKeys.length; i++) {
        strings[i] = row[rowKeys[i]];
        if (i >= 3) {
          break;
        }
      }
      // 함수호출, 라인 생성
      contentsBox.append(makeTableLine(strings));
    }  
    let headIndex = ['','','',''];
    let headCol = Object.keys(fileData[0]);
    for(let i=0; i<headCol.length; i++) {
      headIndex[i] = headCol[i];
      if (i > 3) {
        break;
      }
    }
    for(let c=0; c<4; c++) {
      tableHead[c].innerText = headIndex[c];
    }
    // 체크버튼
    let checkBtns = document.getElementsByClassName('check_box');
    // console.log(checkBtns);
    for(let btn of checkBtns) {
      btn.addEventListener('click', function() {
      btn.classList.toggle('checked');
      // console.log(btn.children[0].innerText);
      if(btn.children[0].innerText == 0){
        btn.children[0].innerText = 1;
      } else {
        btn.children[0].innerText = 0;
      }
      sortIndex = -1;
      });
    }
  
  };
  reader.readAsBinaryString(input.files[0]);
}


let fileInput = document.getElementById('file_input');
fileInput.addEventListener('change', function(event) {
  // console.log(String(fileInput.value).indexOf('.'));
  let fileTypeIndex = String(fileInput.value).indexOf('.');
  let fileType = String(fileInput.value).slice(fileTypeIndex);
  if(fileType != '.xls' && fileType != '.xlsx') {
    console.log('not a excelfile');
    return 0;
  }
  
  readExcel(event);
  fileInput.value = null;
});



// 다크모드
let darkmodeBtn = document.getElementById('darkmode');
darkmodeBtn.addEventListener('click', function() {
  let color1Tags = document.getElementsByClassName("color1");
  let color2Tags = document.getElementsByClassName("color2");
  let color3Tags = document.getElementsByClassName("color3");
  for(let tag of color1Tags) {
    tag.classList.toggle('dark');
  }
  for(let tag of color2Tags) {
    tag.classList.toggle('dark');
  }
  for(let tag of color3Tags) {
    tag.classList.toggle('dark');
  }
});


// 테이블 정렬
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
  
  //체크박스를 위해 원본에서 추가됨
  let checkBtns = document.getElementsByClassName('check_box');
  for(let btn of checkBtns) {
    btn.addEventListener('click', function() {
    btn.classList.toggle('checked');
    if(btn.children[0].innerText == 0){
      btn.children[0].innerText = 1;
    } else {
      btn.children[0].innerText = 0;
    }
    sortIndex = -1;
    });
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
  //체크박스를 위해 원본에서 추가됨
  let checkBtns = document.getElementsByClassName('check_box');
  for(let btn of checkBtns) {
    btn.addEventListener('click', function() {
    btn.classList.toggle('checked');
    if(btn.children[0].innerText == 0){
      btn.children[0].innerText = 1;
    } else {
      btn.children[0].innerText = 0;
    }
    sortIndex = -1;
    });
  }
}


tableHead[0].addEventListener('click', function() {
  if(sortIndex == 0) {
    elementsReverseBySelector("#contents .table_line");
  } else {
    sortElementBySelector("#contents .table_line", "#contents .table_line .col0");
    sortIndex = 0;
  }
});
tableHead[1].addEventListener('click', function() {
  if(sortIndex == 1) {
    elementsReverseBySelector("#contents .table_line");
  } else {
    sortElementBySelector("#contents .table_line", "#contents .table_line .col1");
    sortIndex = 1;
  }
});
tableHead[2].addEventListener('click', function() {
  if(sortIndex == 2) {
    elementsReverseBySelector("#contents .table_line");
  } else {
    sortElementBySelector("#contents .table_line", "#contents .table_line .col2");
    sortIndex = 2;
  }
});
tableHead[3].addEventListener('click', function() {
  if(sortIndex == 3) {
    elementsReverseBySelector("#contents .table_line");
  } else {
    sortElementBySelector("#contents .table_line", "#contents .table_line .col3");
    sortIndex = 3;
  }
});
tableHead[4].addEventListener('click', function() {
  if(sortIndex == 4) {
    elementsReverseBySelector("#contents .table_line");
  } else {
    sortElementBySelector("#contents .table_line", "#contents .table_line .check_box");
    sortIndex = 4;
  }
});

// 엔터 입력 받기

const checkNextLine = function() {
  let checkBoxs = document.querySelectorAll("#contents .check_box");
  for(let i=0; i<checkBoxs.length; i++) {
    if(checkBoxs[i].children[0].innerText == 0) {
      checkBoxs[i].children[0].innerText = 1;
      checkBoxs[i].classList.add('checked');
      break;
    }
  }
}
document.body.addEventListener('keydown', function(event) {
  if(event.key == 'Enter') {
    checkNextLine();
    sortIndex = -1;
  }
});