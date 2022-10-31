// let product;
// let price;
// goMart();
// pickDrink(pay);

// function goMart() {
//   console.log('gomart');
// }
// function pickDrink(callback) {
//   setTimeout(function() {
//     console.log('pick');
//     product = '12';
//     price = '3000';
//     callback();
//   }, 3000);
// }
// function pay() {
//   console.log(price);
// }

// let bg = document.body;
// setTimeout(function() {
//   bg.style.backgroundColor = 'red';
//   setTimeout(function() {
//     bg.style.backgroundColor = 'orange';
//     setTimeout(function() {
//       bg.style.backgroundColor = 'yellow';
//       setTimeout(() => {
//         bg.style.backgroundColor = 'green';
//         setTimeout(() => {
//           bg.style.backgroundColor = 'blue';
//         }, 2000);
//       }, 2000);
//     },2000);
//   }, 2000);
// }, 2000);

// function promise1(flag) {
//   return new Promise(function(resolve, reject) {
//     if(flag) {
//       resolve(1);
//     } else {
//       reject(0);
//     }
//   });
// }
// promise1(1)
//   .then(function(result) {
//     console.log(result);
//   }) 
//   .catch(function(err) {
//     console.log(err);
//   });


// let product;
// let price;
// goMart();
// pickDrink().then(pay);

// function goMart() {
//   console.log('gomart');
// }
// function pickDrink() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       console.log('pick');
//       product = 'coffee';
//       price = 3000;
//       resolve();
//     }, 3000);
//   });
// }
// function pay() {
//   console.log(product, price);
// }

const setBgColor = function(color) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      console.log(color, new Date());
      resolve();
    }, 2000);
  });
}


setBgColor('red')
.then(function() {
  return setBgColor('orange');
})
.then(() => {
  return setBgColor('yellow');
})
.then(() => {
  return setBgColor('green');
})
.then(() => {
  setBgColor('blue');
});