class Textit
  include HTTParty
  # Uncomment the line below for debug output in console
  # debug_output $stderr
  base_uri 'https://api.textit.in'

  def initialize
    @config = YAML::load(File.read(File.join(Rails.root, 'config/textit.yml')))
    @auth_token = @config['auth_token']
  end

  def send_sms(relayer_id, to_number, text)
    options = { :headers => { "Authorization" => "Token #{ @auth_token }" }, :body => { :relayer => relayer_id, :phone => to_number, :text => text } }
    self.class.post("/api/v1/sms.json", options).parsed_response
  end

  def get_recent
    options = { :headers => { "Authorization" => "Token #{ @auth_token }" } }
    self.class.get("/api/v1/sms.json", options).parsed_response
  end

  def relayers(query = nil)
    options = { :headers => { "Authorization" => "Token #{ @auth_token }" } }
    if query
      options.merge!({ :query => query })
    end
    self.class.get("/api/v1/relayers.json", options).parsed_response
  end

  def claim_relayer(claim_code, phone, name = nil)
    options = { :headers => { "Authorization" => "Token #{ @auth_token }" }, :body => { :claim_code => claim_code.gsub(/\s+/, "").upcase, :phone => phone, :name => name } }
    self.class.post("/api/v1/relayers.json", options).parsed_response
  end

  def delete_relayers(query)
    options = { :headers => { "Authorization" => "Token #{ @auth_token }" } }
    options.merge!({ :query => query })
    self.class.delete("/api/v1/relayers.json", options)
  end
end
