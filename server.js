
var express = require("express");
var bodyParser = require('body-parser');
var method_override = require('method-override');
var exphbs =require ('express-handlebars');
var app = express();
//this way heroku can listen to the port dynamically, or we can still listen to port 3000 locally
var PORT= process.evn.PORT || 3000;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(method_override('_method'));
app.engine('handlebars', exphbs ({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var routes= require('./controllers/burgers_controller.js')
app.use('/', routes);


app.listen(PORT, function() {
  console.log("App listening on http://localhost:%s " , PORT);
});

//the server will obtain all data from mysql from our orm, from burger.js, and using our route in order to do so. Then, we need to pass that data from mysql into our frontend
