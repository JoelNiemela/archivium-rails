class RenameObjects < ActiveRecord::Migration[5.1]
  def change
    rename_table :objects, :objs
  end
end
