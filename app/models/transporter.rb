class Transporter < ActiveRecord::Base
	has_many :deliveries, dependent: :destroy
	
end
