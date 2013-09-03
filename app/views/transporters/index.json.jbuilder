json.array!(@transporters) do |transporter|
  json.extract! transporter, :name, :phone, :id
  json.url transporter_url(transporter, format: :json)
end
