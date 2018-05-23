var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var request = require('request');


//Set Static Directory
app.use(express.static(__dirname + '/public'));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req,res) {
  res.render('./index');
});

//Models
var models = require("./app/models");

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

//For handlebars
app.set('views', './app/views');
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);
require('./app/routes/api-routes.js')(app, passport);

//Load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

app.listen(port, function(err){

  if (!err)
    console.log(`App is running on localhost: ${port}...`);
  else console.log(err)
});
