class Listing < ApplicationRecord
    has_many :reviews
    has_many :images
end
