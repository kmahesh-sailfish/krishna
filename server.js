/**
 * Created by rubhu on 5/30/2016.
 */
var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('welcome to Api exprees..');

});


app.get('/sample',function(req,res){
res.type('application/json');
    res.send(JSON.stringify({a:1}))
});



app.listen(5500);