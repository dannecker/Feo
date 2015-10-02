class Timeline < Page
  validates :date, :subtitle, :image, presence: true

  rails_admin do
    visible do
      parent Page
      label 'Таймлайн'
      label_plural 'Таймлайн'
      # weight -1
    end

    nestable_list({ position_field: :position})

    field :title do
      label 'Заголовок'
    end

    field :subtitle do
      label 'Описание'
    end

    field :date do
      label 'Дата'
    end

    field :image do
      label 'Изображение'
    end
  end
end