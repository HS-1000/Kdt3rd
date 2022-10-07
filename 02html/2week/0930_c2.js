// 객체 리터럴, 딕셔너리 (object)
// 객체: 키-값 형태 {key:value, key:value, ...}

const cat = {
    name: '주인',
    age: 22,
    mew: function() {
        return "meowwww~";
    }
};

console.log(cat.name);
// === console.log(cat['name']);
console.log(cat.mew());
// === console.log(cat['mew']());
cat.lunch = "ramen";
// === cat['lunch'] = "ramen";
// 딕셔너리 이면서 객체같다

// const node = {
//     value: NaN,
//     parent: null,
//     child: null
// };

// const nodeA = node;
// nodeA.value = 1;
// console.log(node.value); // 1출력


const node = function() {
    const nodeX = {};
    nodeX.value = NaN;
    nodeX.parent = null;
    nodeX.child = null;
    return nodeX;
}

const nodeA = node();
nodeA.value = 1;
const nodeB = node();
nodeB.value = 2;
nodeB.parent = nodeA;
// console.log(nodeA.value);
console.log(nodeB.parent.value);
