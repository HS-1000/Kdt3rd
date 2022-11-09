const User = require('../model/User');



exports.user = (req, res) => {
  res.render('user', {userInfo : User.userInfo()});
};