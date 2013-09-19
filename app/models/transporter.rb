# == Schema Information
#
# Table name: transporters
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  phone      :string(255)
#  id_number  :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Transporter < ActiveRecord::Base
	has_many :deliveries, dependent: :destroy #delte transporter will destroy deliveries
	
	def show
		@transporter = Transporter.find(params[:id])
		@deliveries = @transporter.deliveries	#.paginate(page: params[:page])
	end
end
