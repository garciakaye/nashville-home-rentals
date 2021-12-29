class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :image
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
