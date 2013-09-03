json.array!(@deliveries) do |delivery|
  json.extract! delivery, :name, :current_price, :amount_accepted, :amount_rejected, :comments
  json.url delivery_url(delivery, format: :json)
end
