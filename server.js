/**
 * Created by rubhu on 5/30/2016.
 */
var express = require('express');
var debug = require('debug');
var http =require('http');

var app = express();

app.get('/',function(req,res){
    res.send('welcome to Api exprees..');

});


app.get('/sample',function(req,res){
res.type('application/json');
    res.send(JSON.stringify({a:1}))
});


var port = process.env.PORT || 5500;
var server = http.createServer(app);
server.listen(port, function (err) {
    console.log('listening in http://localhost:' + port);
    console.log(port);
});
server.on('listening',function(){
    console.log('listening ---- port..');
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
});

