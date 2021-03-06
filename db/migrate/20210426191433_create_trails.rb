class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.text :location
      t.integer :duration
      t.text :details
      t.text :img_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
