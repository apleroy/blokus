class Board
  include Mongoid::Document
  include Mongoid::Timestamps::Created

  field :game_id, type: Integer

  #field :pieces, type: Array #cascade_callbacks: true

  embeds_many :moves, cascade_callbacks: true
end
