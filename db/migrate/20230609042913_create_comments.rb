class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :description, null: false
      t.references :commentor, foreign_key: { to_table: :users }, null: false
      t.references :pin, foreign_key: true, null: false
      t.timestamps
    end
  end
end
