class Department::Specialist < Page
  rails_admin do
    visible false

    label_plural 'Информация о специалистах'
    label 'Информация о специалистах'

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