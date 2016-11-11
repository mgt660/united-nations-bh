var express = require('express');
var app = express();

app.use(express.static('static'))

app.get('/', function(request, response){
    response.sendfile('index.html');
});
app.get('/netid', function(request, response){
    response.send('what do you mean');
});
app.listen(process.env.PORT || 4000);