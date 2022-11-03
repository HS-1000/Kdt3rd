const express = require('express');
const app = express();
const PORT = 8000;
const multer = require('multer');
const path = require('path');
const fs = require("fs");
const upload = multer({
  dest: 'uploads/'
});
// const uploadDetail = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads/')
//     },
//     filename(req, file, done) {
//       const ext = file.mimetype.split("/")[1];
//       done(null, `${req.body.title}.${ext}`);
//     }
//   }),
//   limits: {fileSize: 5*1024*1024}
// });
let fileNameTemp;
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/')
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      fileNameTemp = path.basename(file.originalname, ext) + Date.now() + ext;
      done(null, fileNameTemp);
    }
  }),
  limits: {fileSize: 5*1024*1024}
});
const uploadById = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/')
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      fileNameTemp = req.body.userId + Date.now() + ext;
      done(null, fileNameTemp);
    }
  }),
  limits: {fileSize: 5*1024*1024}
});
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
//   },
// });

app.set('view engine', 'ejs');
// Middleware 설정
// 요청과 응답 중간에서 작업
app.use('/views', express.static(__dirname + '/views')); // views 파일 설정
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use('/uploads', express.static(__dirname + '/uploads'));
//프론트에서 접근 하려면

let id = 'c1234';
let pw = 'abc1234';

app.get('/', function(req, res) {
  res.render('index6', {title:'title'});
  // index -> 수업1101, index2 -> 실습29, index3 -> 실습30
  // index4 -> 수업1102, index5 -> 실습31 index6 -> 수업1103
  // 
});
app.get('/getReturnAll', (req, res) => {
  res.send(req.query);
});
app.get('/fileList', (req, res) => {
  let answer = fs.readdirSync('uploads/');
  res.send({data : answer});
});

app.post('/postReturnAll', (req, res) => {
  res.send(req.body);
});
app.post('/upload', uploadDetail.single('inputFile'), (req, res) => {
  // single의 인자 -> ejs의 input의 name
  // single() -> req.file객체에 파일 정보
  console.log(req.file);
  console.log(req.body);
  res.send('Upload');
});
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('upload');
});
app.post('/upload/fields', uploadDetail.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'},{name:'userfile4'},{name:'userfile5'}]), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send('upload');
});
app.post('/signup', uploadById.single('userFile'), (req, res) => {
  let data = req.body;
  data.imgSrc = `../uploads/${fileNameTemp}`;
  res.render('index5_1', data);
});
app.post('/dyFile', uploadDetail.single('userfileAxios'), (req, res) => {
  res.send(req.file);
});
// app.get('/ajax', (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });
// app.get('/axios', (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });
// app.get('/axiosSign', (req, res) => {
//   res.send(req.query);
// });
// app.get('/fetch', (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });
// app.post('/ajax', (req,res) => {
//   console.log(req.body);
//   res.send(req.body);
// });
// app.post('/axios', (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });
app.post('/axiosLogin', (req, res) => {
  ((req.query.id == id) && (req.query.pw == pw)) ? res.send({"r":true}) : res.send({"r":false});
});
// app.post('/fetch', (req, res) => {
//   res.send(req.body);
// });
app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});

