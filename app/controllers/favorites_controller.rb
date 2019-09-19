class FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token

  # index
  def index
    render json: Favorite.all
  end

  # show
  def show
      render json: Favorite.find(params["id"])
  end

  # create
  def create
      render json: Favorite.create(params["favorite"])
  end

  # delete
  def delete
    render json: Favorite.delete(params["id"])
  end

  # update
  def update
    render json: Favorite.update(params["id"], params["favorite"])
  end
end
