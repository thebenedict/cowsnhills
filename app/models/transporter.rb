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

	
	def self.search(search)
		if search
			find(:all, :conditions => ['name LIKE ? OR phone LIKE ? OR id_number LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%"])
		else
			find(:all)
  end
end
end
