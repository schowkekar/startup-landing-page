let Peer = require('simple-peer')
var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname)); //Serves resources from public folder


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/Index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


var server = app.listen(443, function () {
    console.log('Node server is running..');
});
