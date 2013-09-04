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
	has_many :deliveries, dependent: :destroy
	
end
