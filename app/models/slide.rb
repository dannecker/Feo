class Slide < ActiveRecord::Base
  has_attached_file :image, :styles => { default: "2000x525>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  has_ancestry

  validates :name, :title, :description, :link, :image, presence: true

  rails_admin do
    visible do
      parent Page
      label_plural 'Слайды'
      label 'Слайд'
      # weight -1
    end

    nestable_list({ position_field: :position})

    field :name do
      label 'Название слайда'
    end

    field :title do
      label 'Заголовок слайда'
    end

    field :description do
      label 'Описание (подзаголовок)'
    end

    field :link do
      label 'Ссылка'
    end

    field :image do
      label 'Фотография (2000x525px)'
    end

    field :is_active do
      label 'Слайд активен?'
    end
  end

end
