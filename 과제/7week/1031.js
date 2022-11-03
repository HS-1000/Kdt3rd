const printName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
    // return name;
  })
}
const printBack = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('back');
      resolve('back');
    }, 1000);
  });
}
const hell = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("여기는 callback hell");
    }, 1000);
  });
}

async function exec() {
  let nameStr = await printName('kim');
  console.log(nameStr + "님 환영합니다");
  let backStr = await printBack();
  console.log(`${backStr}을 실행했구나`);
  await hell();
}

exec();