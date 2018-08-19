class RenameObjsTypeColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :objs, :type, :obj_type
  end
end