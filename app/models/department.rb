class Department < ActiveRecord::Base
  belongs_to :category, class_name: 'Department::Category', foreign_key: 'category_id'
  has_and_belongs_to_many :specialities
  has_and_belongs_to_many :services

  has_ancestry

  validates :name, :description, :image, :category, presence: true

  has_attached_file :image, style: {default: "960x400>"}, default_url: "/images/:style/missing.png"
  has_attached_file :thumbnail, styles: {default: "215x215"}, default_url: "/images/:style/missing.png"

  validates_attachment_content_type :image, :thumbnail, :content_type => /\Aimage\/.*\Z/


  default_scope { order(position: :asc) }

  has_one :general_overview,
          class_name: 'Department::General',
          as: :pagable,
          inverse_of: :pagable,
          dependent: :destroy
  has_one :for_patients,
          class_name: 'Department::Patient',
          as: :pagable,
          inverse_of: :pagable,
          dependent: :destroy
  has_one :specialists,
          class_name: 'Department::Specialist',
          as: :pagable,
          inverse_of: :pagable,
          dependent: :destroy
  has_one :achievements,
          class_name: 'Department::Achievement',
          as: :pagable,
          inverse_of: :pagable,
          dependent: :destroy
  has_one :publications,
          class_name: 'Department::Publication',
          as: :pagable,
          inverse_of: :pagable,
          dependent: :destroy
  has_one :in_press,
          class_name: 'Department::Press',
          as: :pagable,
          inverse_of: :pagable,
          dependent: :destroy


  accepts_nested_attributes_for :general_overview, allow_destroy: true
  accepts_nested_attributes_for :for_patients, allow_destroy: true
  accepts_nested_attributes_for :specialists, allow_destroy: true
  accepts_nested_attributes_for :achievements, allow_destroy: true
  accepts_nested_attributes_for :publications, allow_destroy: true
  accepts_nested_attributes_for :in_press, allow_destroy: true

  rails_admin do
    visible do
      label_plural 'Отделения'
      label 'Отделение'
      # weight -1
    end

    nestable_tree({ position_field: :position, max_depth: 3 })

    list do
      field :name do
        label 'Название отделения'
      end

      field :category do
        label 'К какой группе пренадлежит'
      end

      field :specialities do
        label 'Связанные специальности'
      end

      field :services do
        label 'Связанные услуги'
      end

      field :show_in_menu do
        label 'Основное меню'
      end

    end

    edit do
      group :contents do
        label 'Информационные блоки'
      end

      field :name do
        label 'Название отделения'
      end
      field :description, :ck_editor do
        label 'Краткое описание'
      end
      field :introduction, :ck_editor do
        label 'Введение (подробнее)'
      end

      field :image do
        label 'Фотография'
        help 'Основная фотография отделения, 960x400px'
      end

      field :thumbnail do
        label 'Изображение раздела'
        help 'Отображатся при выборе группы отделений, 215х215px'
      end

      field :category do
        label 'К какой группе пренадлежит'
      end
      field :specialities do
        label 'Связанные специальности'
      end
      field :services do
        label 'Связанные услуги'
      end

      field :show_in_menu do
        label 'Показывать в меню'
      end


      field :general_overview do
        label 'Общая информация'
        group :contents
      end
      field :for_patients do
        label 'Для пациентов'
        group :contents
      end
      field :specialists do
        label 'Специалисты отделения'
        group :contents
      end
      field :achievements do
        label 'Достижения'
        group :contents
      end
      field :publications do
        label 'Публикации'
        group :contents
      end
      field :in_press do
        label 'Пресса о отделении'
        group :contents
      end
    end

  end
end
