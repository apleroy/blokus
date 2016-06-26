class Game < ActiveRecord::Base

  has_many :user_games, dependent: :destroy
  has_many :users, through: :user_games

  def board
    Board.where(:game_id => self.id).first
  end


end
