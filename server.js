//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');
// var register = require('./modules/routes/register.js');
// var shelf = require('./modules/routes/shelf.js');

//use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', index);
// app.use('/register', register);
// app.use('/shelf', shelf);

//global
var port = process.env.PORT || 3000;

//spin up server
app.listen(port, function(){
console.log('server up on :', port);
});
