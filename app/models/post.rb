class Post < Page
  validates :subtitle, :content, presence: true

  rails_admin do
    visible do
      parent Page
      label 'Новость'
      label_plural 'Новости'
      # weight -1
    end

    field :title do
      label 'Заголовок'
    end
    field :subtitle do
      label 'Подзаголовок'
    end
    field :content, :ck_editor do
      label 'Содержание'
    end
    field :image do
      label 'Изображение'
    end
  end
end
