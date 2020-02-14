var
    twit = require('twit'),
    config = require('./config');

var Twitter = new twit(config);

var params = {
  q: 'levenshulme -filter:retweets -filter:replies',
  result_type: 'mixed',
  lang: 'en',
  count: 100
}

const runBot = () => {
  Twitter.get('search/tweets', params, function(err, data) {

  });
}

runBot();