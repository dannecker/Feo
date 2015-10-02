class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.string :name
      t.string :description

      t.attachment :image

      t.string :ancestry
      t.integer :position

      t.belongs_to :category

      t.timestamps null: false
    end
  end
end
