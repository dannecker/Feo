class CreateStandardCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :type
      t.string :name
      t.string :description

      t.string :ancestry
      t.integer :position

      t.boolean :is_active, default: true

      t.references :tagable, polymorphic: true, index: true

      t.timestamps null: false
    end

    add_attachment :categories, :image
  end
end
