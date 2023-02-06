json.tweet do
  json.message  @tweet.message
  json.image    url_for(@tweet.image) if @tweet.image.attached?
end
