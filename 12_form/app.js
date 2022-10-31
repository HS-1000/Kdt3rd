const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views')); // views 파일 설정
app.get('/', function(req, res) {
  res.render('../02html/7week/1031_c.html');
});
app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});