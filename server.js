var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



app.use(express.static('static'))

app.get('/', function(request, response){
    response.sendfile('index.html');
});
app.get('/algeria', function(request, response){
    response.send('algeria.html');
});
app.get('/chad', function(request, response){
    response.send('chad.html');
});
app.get('/colombia', function(request, response){
    response.send('Models/Colombia.html');
});
app.get('/indonesia', function(request, response){
    response.send('Models/Indonesia.html');
});
app.get('/nigeria', function(request, response){
    response.send('nigeria.html');
});
app.get('/somalia', function(request, response){
    response.send('somalia.html');
});
app.get('/southafrica', function(request, response){
    response.send('southafrica.html');
});
<<<<<<< HEAD
app.get('/start', function(request, response){
    response.sendFile(path.join(__dirname + '/Erdem_1.html'));
});
app.get('/netid', function(request, response){
    response.send('what do you mean');
=======
app.get('/srilanka', function(request, response){
    response.send('Models/Sri Lanka.html');
>>>>>>> 8bed23befdefef2719ebb79fdfa097f22a9b5fad
});
app.get('/colombia', function(request, response){
    response.sendFile(path.join(__dirname + '/reports' + '/colombia.html'));
});
app.get('/indonesia', function(request, response){
    response.sendFile(path.join(__dirname + '/reports' + '/indonesia.html'));
});
app.listen(process.env.PORT || 4000);