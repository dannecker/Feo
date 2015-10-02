class AddRoleToAccounts < ActiveRecord::Migration
  def change
    add_column :accounts, :roles_mask, :string
  end
end
