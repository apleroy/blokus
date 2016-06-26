class Piece
  #include ActiveModel::Model
  #include Mongoid::Document
  attr_accessor :id, :user_id, :squares

  def initialize(id = nil, user_id = nil, squares = [])
    @id = id
    @user_id = user_id
    @squares = squares
  end

  #embedded_in :board
end