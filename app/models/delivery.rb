# == Schema Information
#
# Table name: deliveries
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  current_price   :integer
#  amount_accepted :integer
#  amount_rejected :integer
#  comments        :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class Delivery < ActiveRecord::Base
end
