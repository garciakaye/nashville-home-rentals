class AddColumnToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :listing_id, :integer
  end
end
