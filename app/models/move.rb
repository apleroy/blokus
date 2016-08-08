class Move
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  field :user_id, type: Integer
  #field :board_id, type: String
  field :piece_id, type: Integer
  field :squares, type: Array

  embedded_in :board

  def empty?
  end

  def each_pair

  end

end
