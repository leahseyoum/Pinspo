class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    render json: user_params
  end


  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
