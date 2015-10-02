class CreateDepartmentsServices < ActiveRecord::Migration
  def change
    create_table :departments_services, id: false do |t|
      t.references :department, index: true
      t.references :service, index: true
    end
  end
end
