class CreateBoardPins < ActiveRecord::Migration[7.0]
  def change
    create_table :board_pins do |t|
      t.references :pin, null:false, foreign_key:{to_table: :pins }
      t.references :board, null:false, foreign_key: { to_table: :boards}
      t.timestamps
    end
    add_index :board_pins, [:pin_id, :board_id], unique: true
  end
end
