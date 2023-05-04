@board_pins.each do |board_pin|
    json.set! board_pin.id do
        json.extract! board_pin, :id, :board_id, :pin_id
    end
end