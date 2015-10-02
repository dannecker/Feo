class Service < ActiveRecord::Base
  belongs_to :service_group
  has_and_belongs_to_many :departments

  has_ancestry

  rails_admin do
    visible do
      label_plural 'Услуги'
      label 'Услуга'
      # weight -1
    end

    nestable_tree({ position_field: :position, max_depth: 3 })

    field :service_group do
      label 'Группа услуг'
    end
    field :name do
      label 'Наименование услуги'
    end
    field :description, :ck_editor do
      label 'Описание'
    end
    field :departments do
      label 'Отделения'
    end

    field :is_active do
      label 'Услуга активна?'
    end
  end

end
