class ListingSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :reviews, :images
end
