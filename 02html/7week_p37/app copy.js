const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
// Middleware 설정
// 요청과 응답 중간에서 작업
app.use('/views', express.static(__dirname + '/views')); // views 파일 설정
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
// json형태로 데이터를 전달받음 (클라이언트와 서버 사이에 json 형태로 통신)

// Routing - 경로 설정
// '/'->app.js 에게 루트 경로로 GET요청이 들어와서 응답을 해주는...index.ejs을 찾아서 응답
// req -> 요청 (클라이언트>>>서버)
// res -> 응답 (서버>>>클라이언트)
// app.js는 서버파일이다

let id = c1234;
let pw = abc1234;

app.get('/', function(req, res) {
  // res.render('index2');
  res.render('index2', {title:'title'});
  // index -> 수업, index2 -> 과제
});
app.get('/getForm', function(req, res) {
  // console.log(req.query);
  // res.render('result2', {info:req.query});
  // console.log(req.query.GetPw);
  // res.render('result', {title: 'GET success'});
  // post는 req.body
});
app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post('/postForm', function(req,res) {

  // console.log('post connect');
  // res.render('result', 
  // {
  //   title:'POST success',
  //   userInfo: req.body
  // });
});
app.post('/ajax', (req,res) => {
  console.log(req.body);
  res.send(req.body);
});
app.post('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post('/fetch', (req, res) => {
  res.send(req.body);
});
app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});

