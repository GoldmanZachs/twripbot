var express = require('express');
var request = require('request');
var request = require('url');
//var settings = require('DogeAPI.js');

var app = express();

app.get('/tweets/:username', function(req, res) {
  var username = req.params.username;
  
  options = {
    protocol: "http",
    host: "api.twiiter.com",
    pathname: "1/statuses/user_timeline.json",
    query: { screen_name: username, count: 50 }
  }  
  
  request(url, function(err, res, body) {
    var tweets = JSON.parse(body);
    var tip_pattern = /tip @(\w+) (\d+)/;
    tweets.forEach(function(tweet) {
      tip_pattern.exec(tweet.text);
    });
  });
});