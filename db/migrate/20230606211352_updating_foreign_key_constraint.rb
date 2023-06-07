class UpdatingForeignKeyConstraint < ActiveRecord::Migration[7.0]
  def up
    remove_foreign_key :board_pins, :boards
    add_foreign_key :board_pins, :boards, on_delete: :cascade
  end

  def down
    remove_foreign_key :board_pins, :boards
    add_foreign_key :board_pins, :boards, on_delete: :nullify
  end
end
