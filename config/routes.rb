Rails.application.routes.draw do
  resources :listings
  resources :reviews
  resources :users

  get "/current-user" => "sessions#current_user"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
