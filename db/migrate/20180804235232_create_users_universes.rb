class CreateUsersUniverses < ActiveRecord::Migration[5.1]
  def change
    create_table :users_universes do |t|
      t.integer :user_id
      t.integer :universe_id
      t.timestamps
    end
  end
end