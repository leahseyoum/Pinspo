class AddDescription < ActiveRecord::Migration[7.0]
  def change
    add_column :boards, :description, :string
  end
end
