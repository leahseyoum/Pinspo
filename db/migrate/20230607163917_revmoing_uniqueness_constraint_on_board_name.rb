class RevmoingUniquenessConstraintOnBoardName < ActiveRecord::Migration[7.0]
  def up
    remove_index :boards, name: "index_boards_on_name_and_user_id"
    remove_index :boards, name: "index_boards_on_user_id"
    
    add_index :boards, [:name, :user_id], name: "index_boards_on_name_and_user_id"
    add_index :boards, :user_id, name: "index_boards_on_user_id"
  end

  def down
    remove_index :boards, name: "index_boards_on_name_and_user_id"
    remove_index :boards, name: "index_boards_on_user_id"

    add_index :boards, [:name, :user_id], name: "index_boards_on_name_and_user_id", unique: true
    add_index :boards, :user_id, name: "index_boards_on_user_id"
  end
  
end
