var express = require('express');
var app = express();

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
app.get('/srilanka', function(request, response){
    response.send('Models/Sri Lanka.html');
});
app.listen(process.env.PORT || 4000);