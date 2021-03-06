class TrailsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_trail, only: [:show, :update, :destroy]

  # GET /trails
  def index
    @trails = Trail.all

    render json: @trails, include: :reviews
  end

  # GET /trails/1
  def show
    render json: @trail, include: :reviews
  end

  # POST /trails
  def create
    @trail = Trail.new(trail_params)
    @trail.user = @current_user
    if @trail.save
      render json: @trail, include: :reviews, status: :created, location: @trail
    else
      render json: @trail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trails/1
  def update
    if @trail.update(trail_params)
      render json: @trail, include: :reviews
    else
      render json: @trail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trails/1
  def destroy
    @trail.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trail
      @trail = Trail.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trail_params
      params.require(:trail).permit(:name, :location, :duration, :details, :img_url, :user_id)
    end
end
