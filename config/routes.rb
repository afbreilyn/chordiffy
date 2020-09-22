Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/bat-man', to: 'bat#wibble'

  # get '/hello-world', to: 'hello_world#index'
  #
  resource :hello_world
end
