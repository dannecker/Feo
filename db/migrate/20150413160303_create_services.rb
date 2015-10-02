class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.belongs_to :service_group

      t.string :name
      t.text :description

      t.string :ancestry
      t.integer :position

      t.boolean :is_active, default: true

      t.timestamps null: false
    end
  end
end
