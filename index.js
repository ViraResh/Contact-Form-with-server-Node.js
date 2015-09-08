var http = require('http');
var express   =     require("express");
var bodyParser  =    require("body-parser");
var app       =     express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.post('/send',function(req,res){
  var name = req.body.firstname;
  var lastname = req.body.lastname;
  var radio = req.body.optionsRadios;
  var year = req.body.year;
  var phone = req.body.phone;
  console.log("Name is = "+name+", lastname: "+lastname+" you gender "+radio+" a you born "+year+" your number phone "+phone);
  res.end("yes");
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
