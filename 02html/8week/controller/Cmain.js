// (임시) DB로부터 댓글 목록을 받아옴
// 배열: 전체 댓글
// 각 객체: 댓글 하나
const comments = [
  {
    id : 1,
    userid : 'tom',
    date : '2022-11-02',
    comment : 'hello'
  },
  {
    id : 2,
    userid : 'jerry',
    date : '2022-11-03',
    comment : '안녕하살법 ^~^ '
  },
  {
    id : 3,
    userid : 'asdf',
    date : '2022-11-03',
    comment : 'asdfsadfasdfasdf'
  },
  {
    id : 4,
    userid : 'meow',
    date : '2022-11-07',
    comment : 'meow~'
  }
]

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