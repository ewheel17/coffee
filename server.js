const express = require('express');

var app = express();

app.set('view engine');
app.use(express.static(__dirname + '/public'));

app.get('/public', (req,res) => {
});

app.get('/bad', (req,res) => {
  res.send({
      errorMessage: 'There was an error'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
