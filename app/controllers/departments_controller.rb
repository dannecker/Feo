class DepartmentsController < ApplicationController
  layout 'departments'

  before_action :load_department, except: [:index, :category]

  def index
  end

  def category
    @category = @categories.find(params[:category])
    @departments = @category.departments
  end

  def show

  end

  def about

  end

  def patients

  end

  def specialists

  end

  def achievements

  end

  def publications

  end

  def in_the_press

  end

  protected
  def load_department
    @department = Department.find(params[:id])
  end
end
