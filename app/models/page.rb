class Page < ActiveRecord::Base
  has_ancestry

  belongs_to :pagable, polymorphic: true

  has_attached_file :image, :styles => {:full => "960x660>", :thumb => "300x200>"}, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/


  validates :title, presence: true

  rails_admin do
    visible do
      label 'Раздел'
      label_plural 'Динамические разделы'

    end

    nestable_tree({ position_field: :position, max_depth: 4 })

    field :type do
      label 'Тип'
    end

    field :title do
      label 'Заголовок'
    end

    field :subtitle do
      label 'Подзаголовок'
    end

    field :date do
      label 'Дата'
    end

    field :content, :ck_editor do
      label 'Содержание'
    end

    field :image do
      label 'Изображение'
    end

  end
end
