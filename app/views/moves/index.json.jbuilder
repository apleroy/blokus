json.array!(@moves) do |move|
  json.extract! move, :id, :user_id, :game_id, :piece_id, :squares
  json.url move_url(move, format: :json)
end
