#!/usr/bin/env node

var Twitter = require('twitter');
var BIG_PI = require('./pi');
const config = require('./config');

var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

//client.get('search/tweets', { q: 'π'}, function(error, tweets, response) {
  //console.log(arguments);
//});

var tweetLength = 140;
var index = 28; // FIRST UPDATE then post!
var offset = index * tweetLength;

var tweet = BIG_PI.substr(offset, tweetLength);
// console.log(tweet, tweet.length);

client.post('statuses/update',
  { status: tweet},
  function() {
    console.log(arguments);
  }
);
