class CreateDeliveries < ActiveRecord::Migration
  def change
  drop_table :deliveries
    create_table :deliveries do |t|
      t.integer :amount_accepted
      t.integer :amount_rejected
      t.integer :current_price
      t.string :comments

      t.timestamps
    end
    add_index :deliveries, [:transporter_id, :created_at]
  end
end
