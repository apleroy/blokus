json.array!(@board) do |board|
  json.extract! board, :id, :game_id, :moves
  json.url board_url(board, format: :json)
end
