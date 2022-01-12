class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :listing_id
end
