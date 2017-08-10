var express = require('express');
var app = express();


app.get("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({
    msg: 'Welcome to Welcome to RHP microservice'
  });
  next();
});

app.get("/api/whoami/", function (req, res) {
  var ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(',')[0];
  var info = {
    'ipaddress': ip,
    'language': req.headers["accept-language"].split(',')[0],
    'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
  };

  res.json(info);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});