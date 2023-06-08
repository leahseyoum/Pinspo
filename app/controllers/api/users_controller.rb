class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']


  def create
    @user = User.new(user_params)
    if params[:profile_photo]
      @user.profile_photo.attach(user_params[:profile_photo])
    end

    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(user_params[:id])
    if params[:profile_photo]
      @user.profile_photo.attach(user_params[:profile_photo])
    end
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
    # @user = User.find(params[:id])
    # render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :profile_photo, :id)
  end
end
