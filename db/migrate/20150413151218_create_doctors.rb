class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :experience
      t.text :resume

      t.belongs_to :department
      t.belongs_to :speciality
      t.attachment :photography

      t.timestamps null: false
    end
  end
end
