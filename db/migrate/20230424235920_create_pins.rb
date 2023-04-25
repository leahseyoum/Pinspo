class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :caption, null: false
      t.string :link
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
