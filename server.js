var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



app.use(express.static('static'))

app.get('/', function(request, response){
    response.sendfile('index.html');
});
// Next few lines are obsolete
app.get('/algeria', function(request, response){
    response.send('Models/algeria.html');
});
app.get('/chad', function(request, response){
    response.send('chad.html');
});
//Next few lines define where inputs after the initial slash in the address line take you. 
// They're also used for search words input in the search form
app.get('/colombia', function(request, response){
    response.sendfile('static/Models/Colombia.html');
});
app.get('/indonesia', function(request, response){
    response.sendfile('static/Models/Indonesia.html');
});
app.get('/nigeria', function(request, response){
    response.sendfile('static/Modles/Nigeria_OSC.html');
});
app.get('/mali', function(request, response){
    response.sendfile('static/Models/Mali.html');
});
app.get('/somalia', function(request, response){
    response.sendfile('static/Models/Somalia.html');
});
app.get('/south%20africa', function(request, response){
    response.sendfile('static/Models/South_Africa.html');
});
app.get('/sri%20lanka', function(request, response){
    response.sendfile('static/Models/Sri_Lanka.html');
});
app.get('/algeria', function(request, response){
    response.sendfiles('static/Models/Algeria.html');
});
app.get('/chad', function(request, response){
    response.sendfile('static/Models/Chad.html');
});
app.listen(process.env.PORT || 4000);


