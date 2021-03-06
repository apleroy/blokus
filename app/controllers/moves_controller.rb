class MovesController < ApplicationController
  protect_from_forgery except: :create
  before_action :set_move, only: [:show, :edit, :update, :destroy]

  # GET /moves
  # GET /moves.json
  def index
    #@moves = Move.all
    @board = Board.where(game_id: 44).first
    #puts "Andy"
    #puts @board.to_a
    @moves = @board.moves
    #@moves = Move.where(game_id: 44)
  end

  # GET /moves/1
  # GET /moves/1.json
  def show
  end

  # GET /moves/new
  def new
    @move = Move.new
  end

  # GET /moves/1/edit
  def edit
  end

  # POST /moves
  # POST /moves.json
  def create
    @board = Board.where(game_id: 47).first
    puts "here"
    @move = Move.new(move_params)
    puts @move
    puts params[:move][:squares]
    puts "after"

    #@move.squares = []
    #@move.squares.push(params[:move][:squares].split(','))


    puts @move.squares
    @move.created_at = Date.new
    @move.piece_id = 9
    puts @move.inspect



    puts "after build"
    puts @board.moves

    #respond_to do |format|
      if @board.moves.create(move_params)
        render json: @board.moves
        #flash[:notice] = 'Move was successfully created.'

      else
        format.html { render :new }
        format.json { render json: @move.errors, status: :unprocessable_entity }
      end
    #end
  end

  # PATCH/PUT /moves/1
  # PATCH/PUT /moves/1.json
  def update
    respond_to do |format|
      if @move.update(move_params)
        format.html { redirect_to @move, notice: 'Move was successfully updated.' }
        format.json { render :show, status: :ok, location: @move }
      else
        format.html { render :edit }
        format.json { render json: @move.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /moves/1
  # DELETE /moves/1.json
  def destroy
    @move.destroy
    respond_to do |format|
      format.html { redirect_to moves_url, notice: 'Move was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_move
      @move = Move.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def move_params
      params.require(:move).permit(:user_id, :game_id, :piece_id, {:squares => []})
    end
end
