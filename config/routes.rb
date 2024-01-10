Rails.application.routes.draw do
  resources :habits, only: %i[index show create edit update destroy]
end
