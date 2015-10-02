class AddThumbToDepartments < ActiveRecord::Migration
  def self.up
    add_attachment :departments, :thumbnail
  end

  def self.down
    remove_attachment :departments, :thumbnail
  end
end