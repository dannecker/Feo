class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :name
      t.string :title
      t.text :description
      t.string :link

      t.string :ancestry
      t.integer :position

      t.boolean :is_active, default: true

      t.timestamps null: false
    end
  end
end
