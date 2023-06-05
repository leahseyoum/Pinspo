# app/views/api/board_pins/show.json.jbuilder

if @board_pin.present?
    json.id @board_pin.first.id
    json.pin_id @board_pin.first.pin_id
    json.board_id @board_pin.first.board_id
  else
    json.message 'Board pin not found'
  end
