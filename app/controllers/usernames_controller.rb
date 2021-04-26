class UsernamesController < ApplicationController
  before_action :set_username, only: [:show, :update, :destroy]

  # GET /usernames
  def index
    @usernames = Username.all

    render json: @usernames
  end

  # GET /usernames/1
  def show
    render json: @username
  end

  # POST /usernames
  def create
    @username = Username.new(username_params)

    if @username.save
      render json: @username, status: :created, location: @username
    else
      render json: @username.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /usernames/1
  def update
    if @username.update(username_params)
      render json: @username
    else
      render json: @username.errors, status: :unprocessable_entity
    end
  end

  # DELETE /usernames/1
  def destroy
    @username.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_username
      @username = Username.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def username_params
      params.require(:username).permit(:name, :email, :password_digest)
    end
end
