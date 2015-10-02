class NewsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    redirect_to news_path unless @post
  end
end
