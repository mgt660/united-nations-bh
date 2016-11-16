var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



app.get('/', function(request, response){
    response.send('United Nations interactive website under construction');
});
app.get('/start', function(request, response){
    response.sendFile(path.join(__dirname + '/Erdem_1.html'));
});
app.get('/netid', function(request, response){
    response.send('what do you mean');
});
app.get('/colombia', function(request, response){
    response.sendFile(path.join(__dirname + '/reports' + '/colombia.html'));
});
app.get('/indonesia', function(request, response){
    response.sendFile(path.join(__dirname + '/reports' + '/indonesia.html'));
});
app.listen(process.env.PORT || 4000);