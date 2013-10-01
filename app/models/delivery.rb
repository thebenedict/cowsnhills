# == Schema Information
#
# Table name: deliveries
#
#  id              :integer          not null, primary key
#  current_price   :integer
#  amount_accepted :integer
#  amount_rejected :integer
#  comments        :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class Delivery < ActiveRecord::Base
	belongs_to :transporter
	validates :transporter_id, presence: true
	
	validates :current_price, 
		presence: {message: "You must enter a price for milk"},
		numericality: {message: "must be a number"}
	
	validates :amount_accepted, 
		presence: {message: "You must enter amount of milk accepted"},
		numericality: {message: "must be a number"}
	
	validates :amount_rejected,
		allow_blank: true,
		numericality: {message: "must be a number"}

  after_create :send_confirmation_sms
		
	#no validation for comments, is this safe?
	
	default_scope -> { order('created_at DESC') }

  def value
    self.amount_accepted * self.current_price
  end
	
  protected
  def send_confirmation_sms
    body_text = "Thank you for your delivery of #{self.amount_accepted} liters, expect payment of RWF#{self.value}!"
    t = Textit.new
    t.send_sms(543, self.transporter.phone, body_text)
  end
end
