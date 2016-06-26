class Game < ActiveRecord::Base

  has_many :user_games, dependent: :destroy
  has_many :users, through: :user_games

  has_one :board
end
