class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.string :image
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
