class Api::BoardsController < ApplicationController

    # before_action :board_cover, only: [:board_cover]

  # def board_cover
  #   @board = Board.find_by(id: params[:board_id])
  #   @pin1 = @board.pins.first
  #   @pin2 = @board.pins.second
  #   @pin3 = @board.pins.third
  #   if @board && @pin
  #       render "api/pins/show"
  #   end
  # end

    def index
        # @boards = Board.where(user_id: params[:user_id])
        @boards = Board.all
        render :index
    end

    def show
        @board = Board.find(board_params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if current_user
            @board.user_id = current_user.id
        end

        if @board.save
            render :show
        else
            render json: { errors: @board.errors.full_messages }, status:422
        end
    end
   

    def destroy
        # @board = current_user.boards.find(params[:id])
        @board = Board.find(params[:id])
        if @board && @board.delete
            @board.board_pin_connections.destroy_all
            @user = current_user
            render "api/users/show"
        end
    end

    def update
        @board = Board.find(board_params[:id])
        if @board.user_id === current_user.id && @board.update(board_params)
            render :show
        else
            render json:@board.errors.full_messages, status: 422     
        end
    end

    private

    def board_params
        params.require(:board).permit(:name, :description, :user_id, :id)
    end
end
