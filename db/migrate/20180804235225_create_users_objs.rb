class CreateUsersObjs < ActiveRecord::Migration[5.1]
  def change
    create_table :users_objs do |t|
      t.integer :user_id
      t.integer :obj_id
      t.timestamps
    end
  end
end