const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views')); // views 파일 설정
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use('/uploads', express.static(__dirname + '/uploads'));

// let id = 'c1234';
// let pw = 'abc1234';

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.send('404 Error');
});


app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});

