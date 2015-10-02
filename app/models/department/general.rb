class Department::General < Page
  rails_admin do
    visible false

    label_plural 'Общая информация'
    label 'Общая информация'

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