class CreateDepartmentsSpecialities < ActiveRecord::Migration
  def change
    create_table :departments_specialities, id: false do |t|
      t.references :department, index: true
      t.references :speciality, index: true
    end
  end
end
