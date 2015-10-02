class Doctor < ActiveRecord::Base
  belongs_to :speciality
  belongs_to :department

  has_attached_file :photography, :styles => { :full => "960x660>", :thumb => "300x200>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :photography, :content_type => /\Aimage\/.*\Z/

  validates :name, :speciality, :department, presence: true

  rails_admin do
    visible do
      label_plural 'Специалисты'
      label 'Специалист'
      # weight -1
    end

    field :name do
      label 'ФИО'
    end
    field :speciality do
      label 'Специальность'
    end
    field :department do
      label 'Отделение'
    end
    field :experience do
      label 'Опыт работы (кратко)'
    end
    field :resume, :ck_editor do
      label 'Резюме'
    end
    field :photography do
      label 'Фотография'
    end
  end
end
