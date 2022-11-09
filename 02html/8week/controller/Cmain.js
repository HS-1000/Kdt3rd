
const Comment = require('../model/Comment');
const comments = Comment.commentInfos();
// console.log(comments);
// console.log(Comment.commentInfos());
exports.main = (req, res) => {
  res.render('index1');
};

exports.comments = (req, res) => {
  // { commentInfos: [ {}, {}, {}, {} ]}
  res.render('comments', { commentInfos: comments });
};

exports.comment = (req, res) => {
  let commentId = Number(req.params.id);
  if (commentId != req.params.id) {
    return res.render('404', {errorInfo : 'id type error'});
  }
  else if (commentId < 0 || commentId > comments.length) {
    return res.render('404', {errorInfo : 'comments index out of range'});
  }
  commentId--;
  res.render('comment', comments[commentId]);
};