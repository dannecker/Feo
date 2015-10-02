class AddIntroductionToDepartments < ActiveRecord::Migration
  def change
    add_column :departments, :introduction, :text
  end
end
