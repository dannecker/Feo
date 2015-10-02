class CreateDepartmentsDiseases < ActiveRecord::Migration
  def change
    create_table :departments_diseases, id: false do |t|
      t.references :department, index: true
      t.references :disease, index: true
    end
  end
end
