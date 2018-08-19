class RemoveUserFromObjs < ActiveRecord::Migration[5.1]
  def change
    remove_column :objs, :user_id
  end
end
