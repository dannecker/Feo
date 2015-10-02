class ServiceGroup < ActiveRecord::Base
  has_many :services

  rails_admin do
    visible do
      parent Service
      navigation_label 'Направления'
      label_plural 'Группы услуг'
      label 'Группа услуг'
      # weight -1
    end

    field :name do
      label 'Название группы'
    end

    field :services do
      label 'Услуги данной группы'
    end
  end
end
