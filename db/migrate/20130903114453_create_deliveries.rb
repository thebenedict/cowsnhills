class CreateDeliveries < ActiveRecord::Migration
  def change
    create_table :deliveries do |t|
      t.string :name
      t.integer :current_price
      t.integer :amount_accepted
      t.integer :amount_rejected
      t.string :comments

      t.timestamps
    end
  end
end
