class CreateServiceGroups < ActiveRecord::Migration
  def change
    create_table :service_groups do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
