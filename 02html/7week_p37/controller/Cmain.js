const loginInfo = require('../model/loginInfo');
const id_pw = loginInfo.getData();

exports.main = (req, res) => {
  res.render('index3');
};

exports.login = (req, res) => {
  // ((req.query.id in id_pw) && (req.query.pw == pw)) ? res.send({"r":true}) : res.send({"r":false});
  if(req.query.id in id_pw) {
    let userPw = id_pw[req.query.id].split("//")[0];
    let userName = id_pw[req.query.id].split("//")[1];
    if(req.query.pw == userPw) {
      res.send({"r":true, "name":userName});
    } else {
      res.send({"r":false, "name":"null"});
    }
  } else {
    res.send({"r":false, "name":"null"});
  }
};