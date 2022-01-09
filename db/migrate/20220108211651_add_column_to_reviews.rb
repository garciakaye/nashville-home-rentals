class AddColumnToReviews < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :listing, foreign_key: true
  end
end
