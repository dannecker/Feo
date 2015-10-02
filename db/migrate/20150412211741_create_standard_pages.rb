class CreateStandardPages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :type
      t.string :title
      t.text :subtitle
      t.text :content
      t.date :date

      t.boolean :is_active, default: true

      t.string :ancestry
      t.integer :position

      t.references :pagable, polymorphic: true, index: true

      t.timestamps null: false
    end

    add_attachment :pages, :image
  end
end
