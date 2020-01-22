Rails.application.routes.draw do
  root "pages#index"
  # This line matches all URLs and directs them to index.jsx inside JavaScript/packs
  match "*path", to: "pages#index", via: :all
end
