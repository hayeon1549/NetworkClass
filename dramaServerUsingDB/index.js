var express = require('express');
var logger = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();
var dramaRouter = require('./routes/drama');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));   // 로그 남기기
app.use(express.static('public'));    // 정적 파일 처리
app.use(express.urlencoded({extended: true}));  // body에 담긴 데이터 파싱

app.set('view engine', 'pug');  //템플릿 엔진 세팅
app.set('views', './views');    //pug 파일이 저장된 디렉토리

// app.get('/', function(req, res){
//     res.redirect('/index.html');
// });

app.use('/drama', dramaRouter);
//app.use('/movies', movieRouter);

app.listen(8080, function(){
    console.log('8080 포트에서 대기 중');
});