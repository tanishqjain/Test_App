var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

require('./route')(app);

app.listen(process.env.PORT || 3000);

console.log('Application is running on port 3000');