var express = require('express');
var path = require('path');

var app = express();

const basicAuth = require("express-basic-auth");

app.use(express.static(__dirname + '/public'));

// app.use(basicAuth({
//     users : {'nbuser':'n8t3st@p'},
//     challenge : true
// }))

require('./route')(app);

app.listen(process.env.PORT || 3000);

console.log('Application is running on port 3000');