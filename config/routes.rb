Rails.application.routes.draw do


  root 'site#index'

  get 'api/favorites/', to: 'favorites#index'
  get 'api/favorites/:id', to: 'favorites#show'
  post 'api/favorites/', to: 'favorites#create'
  delete 'api/favorites/:id', to: 'favorites#delete'
  put 'api/favorites/:id', to: 'favorites#update'



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
