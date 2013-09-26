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
	
	validates :name, 
		presence: { :message => "You must enter a name!"}
		
	validates :phone, 
		allow_blank: true,
		format: {:with => /\A[0-9]{10}\Z/, :message => "Phone number must be 10 digits"}
		
	validates :id_number, 
		allow_blank: true,
		uniqueness: {:message => "That id number is already registered"}, 
		format: {:with => /\A[0-9]{16}\Z/, :message => "The id number format is not valid!"}
	
	def show
		@transporter = Transporter.find(params[:id])
		@deliveries = @transporter.deliveries	#.paginate(page: params[:page])
	end

	
	def self.search(search)
		if search
			find(:all, :conditions => ['name LIKE ? OR phone LIKE ? OR id_number LIKE ?', "%#{search}%", "%#{search}%", "%#{search}%"])
		else
			Transporter.find(:all)
  end
end
end
