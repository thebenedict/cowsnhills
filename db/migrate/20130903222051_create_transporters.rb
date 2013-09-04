class CreateTransporters < ActiveRecord::Migration
  def change
    create_table :transporters do |t|
      t.string :name
      t.string :phone
      t.string :id_number

      t.timestamps
    end
  end
end
