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

function getRandomTweet (arr) {
    try {
        var index = Math.floor(Math.random()*arr.length);
        return arr[index];
    } catch (error) {
        return arr[0];
    }
}

const runBot = () => {
  Twitter.get('search/tweets', params, function(err, data) {
      var tweets = data.statuses;
      var tweet = getRandomTweet(tweets);

      if (!err) {
          var tweetId = tweet.id_str;

          if (typeof tweet != 'undefined') {
              Twitter.post('statuses/retweet/:id', {
                  id: tweetId
              }, (err, response) => {
                  if (response) {
                      console.log('Retweeted');
                  }
                  if (err) {
                      console.log('Retweet error: ', err);
                  }
              });
          }
      } else {
          console.log('Something went wrong while searching');
      }
  });
}

runBot();