const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views')); // views 파일 설정
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.get('/', function(req, res) {
  // res.render('index2');
  res.render('index3', {title:1});
});
app.get('/getForm', function(req, res) {
  console.log(req.query);
  res.render('result2', {info:req.query});
});
app.post('/postForm', function(req,res) {
  console.log(req.body);
  res.render('result3', {info:req.body});
});
app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});

