var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('United Nations interactive website under construction');
});
app.get('/netid', function(request, response){
    response.send('what do you mean');
});
app.listen(process.env.PORT || 4000);