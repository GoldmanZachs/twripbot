var request = require('request');
var request = require('url');
var settings = require('DogeAPI.js');

app.get('/tweets/:username', function(req, res) {
  var username = req.params.username;
  
  options = {
    protocol: "http",
    host: "api.twiiter.com",
    pathname: "1/statuses/user_timeline.json",
    query: { screen_name: username, count: 50 }
  }  
  
  var twitterUrl = url.format(options);
}  