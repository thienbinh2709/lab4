
var express = require('express');
var expressHbs = require('express-handlebars')
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'assets')));
app.listen(process.env.PORT || '3001');
app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
app.get('/', function (request,response) {

    response.render('tinde');
})


