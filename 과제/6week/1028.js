const call = function(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

const back = function() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('back');
      resolve();
    }, 1000);
  });
}

const hell = function() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

call('kim')
.then((name) => {
  console.log(name + '반가워');
  return back();
})
.then(() => {
  console.log("back 을 실행했구나");
  return hell();
})
.then(() => {
  console.log("여기는 callback hell");
});