// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const path = require('path');
const moment = require('moment');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/:time',function (req,res) {
  let time = req.params.time;
  if(moment.unix(time).isValid()){
    let unix = moment.unix(time).format('x');
    let strTime = moment.unix(time).format('MMMM DD, YYYY');
    let jsonTime = JSON.stringify({"timestamp": strTime, "unix timestamp": unix}); 
  res.end(jsonTime);
  } 
  if(moment(time).isValid()){
    let unix = moment(time).format('x');
    let strTime = moment(time).format('MMMM DD, YYYY');
    let jsonTime = JSON.stringify({"timestamp": strTime, "unix timestamp": unix}); 
    res.end(jsonTime);
  }else{
    res.end(JSON.stringify({"timestamp": null, "unix timestamp": null}));
  }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
