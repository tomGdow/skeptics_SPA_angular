SkepticsSpaAngular::Application.routes.draw do

  root :to => 'home#index'

  resources :line_items
  resources :carts
  resources :commodities
  resources :bibliographies

  get "home/index"
  get "home/partial1"
  get "home/partial2"
  get "home/partial3"
  get "home/partial4"
  get "home/partial5"
  get "home/partial8"
  get "home/partial9"
  get "home/partial12"
  get "home/partial13"
  get "home/partial14"
  get "home/partial15"
  get "home/footer"
  get "home/timezones"
  get "home/gmtTime"
  get "home/mainnav"
  get "home/timenav"
  get "home/curieFlexslider"
  get "home/charts"
  get "home/celciusNav"
  get "home/dublinslider"
  get "home/banksImage"
  get "home/peleImage"
  get "home/schillachiImage"
  get "home/animatedgifs"
  get "home/blackcat"
  get "home/timer"
  get "home/templatepickll"
  get "home/templatespiders"

  get "home/partialx"
  get "home/partialy"



  match '/your_cart' => "carts#your_cart", :as => "your_cart"
  match '/carts/remove/:id' => 'line_items#destroy'

  #match 'your_biblio'  => 'bibliographies#your_biblio', :as => 'your_biblio'
  #match '/your_show' => "commodities#your_show", :as => "your_show"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.


  # See how all your routes lay out with "rake routes"
  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
