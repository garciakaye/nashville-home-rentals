class RemoveImageFromListings < ActiveRecord::Migration[6.1]
  def change
    remove_column :listings, :image, :string
  end
end
