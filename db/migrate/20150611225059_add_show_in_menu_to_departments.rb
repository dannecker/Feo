class AddShowInMenuToDepartments < ActiveRecord::Migration
  def change
    add_column :departments, :show_in_menu, :boolean
  end
end
