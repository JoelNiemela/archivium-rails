class AddUniverseToObjs < ActiveRecord::Migration[5.1]
  def change
    add_column :objs, :universe_id, :integer
  end
end