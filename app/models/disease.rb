class Disease < ActiveRecord::Base
  has_and_belongs_to_many :departments
  has_and_belongs_to_many :services

  validates :name, :description, presence: true

  rails_admin do
    visible do
      label_plural 'Заболевания'
      label 'Заболевание'

      # weight -1
    end

    field :name do
      label 'Название заболевания'
    end

    field :description, :ck_editor do
      label 'Подробное описание'
    end

    field :departments do
      label 'Связанные отделения'
    end

    field :services do
      label 'Связанные услуги'
    end

  end
end
