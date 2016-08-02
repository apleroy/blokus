json.array!(@moves) do |move|
  json.extract! move, :id, :user_id, :piece_id, :squares

end
