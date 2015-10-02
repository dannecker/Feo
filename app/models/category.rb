class Category < ActiveRecord::Base
  has_ancestry

  belongs_to :tagable, polymorphic: true

  has_attached_file :image, :styles => { :full => "960x660>", :thumb => "300x200>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates :name, presence: true

  rails_admin do
    visible false

    edit do
      field :name
      field :description
      field :image
    end

    list do
      field :type
      field :name
      field :description
      field :image
    end
  end
end
