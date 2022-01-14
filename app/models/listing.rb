class Listing < ApplicationRecord
    has_many :reviews
    has_many :images

    def self.most_reviews
        self.all.max_by { |listing| listing.reviews.length }
    end
end
