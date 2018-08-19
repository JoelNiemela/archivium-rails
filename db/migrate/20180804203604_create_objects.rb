class CreateObjects < ActiveRecord::Migration[5.1]
  def change
    create_table :objects do |t|
      t.string :name
      t.string :type
      t.string :data
      t.timestamps
      t.integer:user_id
    end
  end
end