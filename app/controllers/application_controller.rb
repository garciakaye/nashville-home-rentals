class ApplicationController < ActionController::API
  # include ActionController::Cookies
  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, ENV['JWT_SECRET'])
  end

end
