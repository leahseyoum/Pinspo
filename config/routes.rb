Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :pins, only: [:create, :index, :show, :update, :destroy] do 
      resources :comments, only: [:create, :destroy, :index, :update]
      collection do
        get :search, to: "pins#search", as:"search"
      end
    end
    resources :users, only: [:create, :update, :show] do
      resources :boards, only: [:index, :show, :update]
    end


    resources :boards, only:  [:create, :destroy]
    get '/boards/saved/:board_id', to: 'pins#find_board_saved_pins', as: 'find_board_saved_pins'
    resources :board_pins, only: [:create,  :index]
    get '/board_pins/:board_id/:pin_id', to: 'board_pins#show'
    delete '/board_pins/:board_pins/:pin_id', to: 'board_pins#destroy'
  end


  get '*path', to: "static_pages#frontend_index"
end
