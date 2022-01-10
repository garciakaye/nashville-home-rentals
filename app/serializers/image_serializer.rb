class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :listing_id
end
