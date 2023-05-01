class Api::PinsController < ApplicationController
  wrap_parameters include: Pin.attribute_names + [:image]

  def new
    @pin = Pin.new
    render :new
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    if @pin
      render :show
    else
      render json: @pin.errors.full_messages, status: 404
    end
  end

  def index
    #   @pins = if params[:user_id]
    #   Pin.where(user_id: params[:user_id])
    # else
    #   Pin.all
    # end
      @pins = Pin.all
      render :index
  end

  def edit 
    @pin = Pin.find(params[:id])
    render :edit
  end

  def update
    @pin = Pin.find(pin_params[:id])
    if @pin.update(pin_params)
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      #  redirect_to api_pins_url
      # render :index
    else
      render json: @pin.errors.full_messages, status: 404
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :caption, :user_id, :link, :image, :id)
  end
end
