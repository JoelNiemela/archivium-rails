class RenameUsersUniversesAndUsersObjs < ActiveRecord::Migration[5.1]
  def change
    rename_table :users_objs, :user_objs
    rename_table :users_universes, :user_universes
  end
end
