var express = require('express')
var app = express()
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/views/contact.html');
});

app.get('/portfolio', function(req, res) {
  res.sendFile(__dirname + '/views/portfolio.html');
});

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})