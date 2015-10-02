Rails.application.routes.draw do

  devise_for :accounts
  mount Ckeditor::Engine => '/ckeditor'
  mount RailsAdmin::Engine => '/backoffice', as: 'rails_admin'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  get 'contact' => 'home#contact'
  get 'about-us' => 'about#index'

  get 'about/index'
  get 'about/difference'
  get 'about/timeline'
  get 'about/vision'
  get 'about/specialists'
  get 'about/structure'
  get 'about/board'
  get 'about/partners'
  get 'about/careers'
  get 'about/reports'
  get 'about/periodics'
  get 'about/media'
  get 'about/video'
  get 'about/testimonials'

  get 'services/index'
  get 'services/show'

  # Departments Section
  get 'departments' => 'departments#index'
  get 'departments/:category' => 'departments#category', as: :department_category
  get 'departments/:category/:id' => 'departments#show', as: :department_category_department, controller: :departments
  get 'departments/:category/:id/about' => 'departments#about', as: :about_department
  get 'departments/:category/:id/patients' => 'departments#patients', as: :department_patients
  get 'departments/:category/:id/specialists' => 'departments#specialists', as: :department_specialists
  get 'departments/:category/:id/achievements' => 'departments#achievements', as: :department_achievements
  get 'departments/:category/:id/publications' => 'departments#publications', as: :department_publications
  get 'departments/:category/:id/in-the-press' => 'departments#press', as: :department_press

  # News Section
  get 'news' => 'news#index'
  get 'news/:id' => 'news#show', as: :news_item

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
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

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
