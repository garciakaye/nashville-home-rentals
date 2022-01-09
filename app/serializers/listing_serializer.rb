class ListingSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :price, :reviews
end
