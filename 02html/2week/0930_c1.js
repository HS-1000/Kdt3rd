const arr1 = ['red', 'orange', 'yello', 1, 2];
console.log(typeof(arr1));
const arr2 = new Array('a', 2, 45, 'hello');
arr2[1] += 1;
console.log(arr2[1]);

arr2[10] = 9;
// 동떨어진 인덱스에 추가하면 undefined가 들어간다
console.log(arr2[9]);


for (let x, i=0; i<=arr2.length; x = arr2[i++]) {
    console.log(x);
}
//python의 for i in list: 처럼 쓰고싶다면

//배열에서 자주쓰이는 속성, 메서드
console.log(arr2[arr2.length-1]);
//배열 마지막 가져오기
arr2.push(2);
arr2.push(3, 4, 5);
console.log(arr2[arr2.length-1]);
//배열 마지막에 추가, list.append(n), 여러개 추가 가능
console.log('pop', arr2.pop());
console.log(arr2[arr2.length-1]);
//pop: 배열 마지막 을 return, 제거
console.log(arr2[0], arr2[1]);
arr2.unshift('first');
console.log(arr2[0], arr2[1]);
//unshift: 배열 앞쪽에 추가
console.log('before shift',arr2[0], arr2[1]);
arr2.shift();
console.log('shift1',arr2[0], arr2[1]);
arr2.shift();
console.log('shift2',arr2[0], arr2[1]);
//shift: 배열 가장앞을 제거
console.log(arr2.indexOf(45));
console.log(arr2.indexOf(998));
arr2.push(45);
console.log(arr2.indexOf(45));
// 아이템의 인덱스를 찾는함수, 없다면 -1 return 가장앞 인덱스를 리턴

//2중 배열 가능
const twoDemsion = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoDemsion[1]);

const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
];
let iceCream;
iceCream = letters[3][0];
iceCream += letters[1][3];
iceCream += letters[0][1];
iceCream += letters[0][3];
iceCream += letters[2][2];
console.log(iceCream);

const arr3 = [];
for(let x=0; x<10; x++) {
    arr3[x] = [];
    for(let y=0; y<10; y++){
        arr3[x][y] = [];
        for(let z=0; z<10; z++){
            arr3[x][y][z] = String(x) + String(y) + String(z);
        }
    }
}
console.log(arr3);
//3차원 배열

