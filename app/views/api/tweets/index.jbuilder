json.tweets do
  json.array! @tweets do |tweet|
    json.message tweet.message
    json.image url_for(tweet.image) if tweet.image.attached?
  end
end
