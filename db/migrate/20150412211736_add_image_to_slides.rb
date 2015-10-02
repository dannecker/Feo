class AddImageToSlides < ActiveRecord::Migration
  def self.up
    add_attachment :slides, :image
  end

  def self.down
    remove_attachment :slides, :image
  end
end
