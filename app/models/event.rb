class Event < Page
  validates :subtitle, :date, presence: true

  rails_admin do
    visible do
      parent Page
      label 'Событие'
      label_plural 'События'
      # weight -1


    end

    field :title do
      label 'Заголовок'
    end
    field :subtitle do
      label 'Подзаголовок'
    end
    field :date do
      label 'Дата события'
    end
    field :content, :ck_editor do
      label 'Содержание'
    end
    field :image do
      label 'Изображение'
    end
  end
end