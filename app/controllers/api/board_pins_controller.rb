class Api::BoardPinsController < ApplicationController
    # def create
    #     # @pin = Pin.find(board_pin_params[:pin_id])
    #     # @board = Board.find(board_pin_params[:board_id])
    #     @board_pin = BoardPin.new(pin_id: :pin_id, board_id: :board_id)
      
    #     if @board_pin.save
    #       render json: { message: 'Pin was successfully added to board.' }, status: :ok
    #     else
    #       render json: { error: 'Failed to add pin to board.' }, status: :unprocessable_entity
    #     end
    # end 
    def create
      begin
        @board_pin = BoardPin.new(board_pin_params)
        @board_pin.save!
        
        render json: { message: 'Pin was successfully added to board.' }, status: :ok
      rescue ActiveRecord::RecordInvalid => e
        render json: { error: e.message }, status: :unprocessable_entity
      rescue ActiveRecord::RecordNotFound => e
        render json: { error: e.message }, status: :not_found
      rescue StandardError => e
        render json: { error: e.message }, status: :internal_server_error
      end
    end

    def destroy
        @board_pin = BoardPin.find(params[:id])
        @board_pin.destroy
        redirect_to board_path(@board_pin.board)
    end

    def index 
      @board_pins = BoardPin.all
      render :index
    end
      
    def show 
      @board_pin = BoardPin.where(pin_id: board_pin_params[:pin_id], board_id: board_pin_params[:board_id])
      render :show
    end

    private
     def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id, :id)
     end
end
