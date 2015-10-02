class Speciality < ActiveRecord::Base
  has_many :doctors
  has_and_belongs_to_many :departments

  rails_admin do
    visible do
      parent Doctor

      label_plural 'Специальности'
      label 'Специальность'
      # weight -1
    end

    field :name do
      label 'Название специальности'
    end

    field :doctors do
      label 'Специалисты'
    end

    field :departments do
      label 'Отделения'
    end
  end
end
