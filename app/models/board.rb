class Board
  include Mongoid::Document
  field :piece, type: String

  field :game_id, type: Integer
end
