var fs = require('fs');
var express = require('express');
var multer  = require('multer')

var app = express();
var upload = multer({ dest: 'upload/' });

// 单图上传
// app.post('/upload', upload.single('logo'), function(req, res, next){
//     res.send({ret_code: '0'});
// });

//多图上传
app.post('/upload', upload.array('logo',2), function(req, res, next){
    res.send({ret_code: '0'});
});

app.get('/index', function(req, res, next){
    var form = fs.readFileSync('./index.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(4000);