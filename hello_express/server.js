var express = require('express');
var app = express();

//1. Hello Express example.
// app.get('/', function(req, res){
//     res.send(`<h1>Hello Express</h1>`);
// });

app.listen(8080, function(){
    console.log('8080 포트에서 대기중');
});

//2. 라우팅 처리 예제
// app.get('/', function(req, res){
//     res.send(`<h1>Get request</h1>`);
// });

// app.get('/book',function(req, res){
//     res.send('Get a book');
// });

// app.post('/book',function(req, res){
//     res.send('Add a book');
// });

// app.put('/book',function(req, res){
//     res.send('Update a book');
// });

// app.delete('/book',function(req, res){
//     res.send('Delete a book');
// });

//app.route() 라우트 체인
// app.route('/book')
//     .get(function(req, res){
//         res.send('Get a book');
//     })
//     .post(function(req, res){
//         res.send('Add a book');
//     })
//     .put('/book',function(req, res){
//         res.send('Update a book');
//     })
//     .delete('/book',function(req, res){
//        res.send('Delete a book');
//     })

//3. 미들웨어(사용자 정의)
//Express는 웹 서비스를 위한 기본적인 기능과 구조를 제공한다.
//미들웨어 함수는 다양한 기능을 제공하여 사용자가 선택하여 실행할 수 있다.

// function mw1(req, res, next){
//     console.log('middle ware 1');
//     req.myName='hayeon';
//     next();
// }
// function mw2(req, res, next){
//     console.log('middle ware 2');
//     next();
// }

// app.use(mw2);
// app.use(mw1);

// app.get('/', function(req, res){
//     res.send(`<h1>${req.myName}</h1>`);
// });

//4. 미들웨어 (써드파티 미들웨어 : 로그 남기기, 정적 파일 처리)
// var logger = require('morgan');

// app.use(logger('dev'));
// app.use(express.static('public'));

// app.get('/', function(req, res){
//     res.send('./public/index.html');
// });

//5. querystring 처리 (star-end까지의 합계)
app.get('/',function(req, res){
    if(req.query.start && req.query.end){
        var start = parseInt(req.query.start);
        var end = parseInt(req.query.end);
        console.log(`start=${start}, end=${end}`);
        res.send(`<h1>${calculateSum(start, end)}</h1>`)
    }else{
        res.sendfile('./public/sumRequest.html');
    }
});

function calculateSum(start, end){
    var sum = 0;
    for(var i = start; i<=end; i++){
        sum += i;
    }

    return sum;
}

//6. post 처리 (start-end까지의 합계)
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res){
    if(req.body.start && req.body.end){
        var start = parseInt(req.body.start);
        var end = parseInt(req.body.end);
        console.log(`start=${start}, end=${end}`);
        res.send(`<h1>${calculateSum(start, end)}</h1>`)
    }else{
        res.sendfile('./public/sumRequest.html');
    }
});