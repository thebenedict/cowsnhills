class AddTransporterIdToDelivery < ActiveRecord::Migration
  def change
	add_column :deliveries, :transporter_id, :string
  end
end
