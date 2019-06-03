Rails.application.routes.draw do
	root 'pages#home'
	
	get 'signup', to: 'users#new'
	resources :users, except: [:new]
	resources :objs
	resources :universes do
	  member do
	    get :add_user
	  end
	end
	
	get 'login', to: 'sessions#new'
	post 'login', to: 'sessions#create'
	delete 'logout', to: 'sessions#destroy'
end