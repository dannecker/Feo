class Department::Press < Page
  rails_admin do
    visible false

    label_plural 'Пресса о нас'
    label 'Пресса о нас'

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