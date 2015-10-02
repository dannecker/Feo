class CreateDiseasesServices < ActiveRecord::Migration
  def change
    create_table :diseases_services, id: false do |t|
      t.references :disease, index: true
      t.references :service, index: true
    end
  end
end
