class Tweet < ApplicationRecord
  validates :message, presence: true, length: { maximum: 140 }

  has_one_attached :image
end
