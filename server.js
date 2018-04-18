const express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.render('index.html');
});

app.listen(port, function(){
  console.log("App is running on port" + port);
});
