crumb :root do
  link 'Головна', root_path
end

crumb :news do
  link 'Новини', news_path
end

crumb :news_item do |item|
  link item.title, news_item_path(item)
  parent :news
end

crumb :all_departments do
  link 'Відділення', departments_path
end

crumb :department_category do |category|
  link category.name, category
  parent :all_departments
end

crumb :department do |department|
  link department.name, [department.category, department]
  parent :department_category, department.category
end

crumb :department_subpage do |department, page_name|
  link page_name
  parent :department, department
end

#
#
# get 'departments' => 'departments#index', as: :departments
# get 'departments/:category' => 'departments#category', as: :department_category
# get 'departments/:category/:id' => 'departments#show', as: :department_category_department, controller: :departments
# get 'departments/:category/:id/about' => 'departments#about', as: :about_department
# get 'departments/:category/:id/patients' => 'departments#patients', as: :department_patients
# get 'departments/:category/:id/specialists' => 'departments#specialists', as: :department_specialists
# get 'departments/:category/:id/achievements' => 'departments#achievements', as: :department_achievements
# get 'departments/:category/:id/publications' => 'departments#publications', as: :department_publications
# get 'departments/:category/:id/in-the-press' => 'departments#press', as: :department_press

# crumb :projects do
#   link "Projects", projects_path
# end

# crumb :project do |project|
#   link project.name, project_path(project)
#   parent :projects
# end

# crumb :project_issues do |project|
#   link "Issues", project_issues_path(project)
#   parent :project, project
# end

# crumb :issue do |issue|
#   link issue.title, issue_path(issue)
#   parent :project_issues, issue.project
# end

# If you want to split your breadcrumbs configuration over multiple files, you
# can create a folder named `config/breadcrumbs` and put your configuration
# files there. All *.rb files (e.g. `frontend.rb` or `products.rb`) in that
# folder are loaded and reloaded automatically when you change them, just like
# this file (`config/breadcrumbs.rb`).