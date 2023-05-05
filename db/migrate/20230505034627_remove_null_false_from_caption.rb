class RemoveNullFalseFromCaption < ActiveRecord::Migration[7.0]
  def change
    change_column :pins, :caption, :string, null: true
  end
end
