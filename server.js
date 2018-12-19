// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204



// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//
app.get("/api/whoami", function (req, res) {
  //req.query=req.params
  //let regex=/^(::ffff:)?(\d{1,3}\.){3}\d{1,3}$/
  //req.a=req.headers['x-forwarded-for'].match(regex)
  //console.log(req.a)
  res.json({
    ipaddress: req.headers['x-forwarded-for'].split(',')[0],
    language:req.headers['accept-language'],
    software:req.headers['user-agent'],
  });
});



// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
