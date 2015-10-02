class Department::Category < Category
  has_many :departments

  default_scope { order(position: :asc) }

  rails_admin do
    visible do
      parent Department

      navigation_label 'Отделения'
      label_plural 'Группы отделений'
      label 'Группа отделений'
      # weight -1
    end

    field :name do
      label 'Название группы'
    end

    field :description do
      label 'Краткое описание'
    end

    field :image do
      label 'Иконка группы'
    end

    field :is_active do
      label 'Группа активна?'
    end

    nestable_tree({ position_field: :position, max_depth: 3 })
  end
end