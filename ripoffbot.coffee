# Array to store streamed tweets

# Get a stream of Tweets
startStreaming = ->
  bot.stream "statuses/filter",
    track: "DogeTip"
  , (stream) ->
    console.log "Listening for Tweets..."
    stream.on "data", (tweet) ->
      
      # Check Tweet for specific matching phrases as Twitter's Streaming API doesn't allow for this
      if tweet.text.match(/tip/)
      
      else
          
      return

    return

  return
queue = []
