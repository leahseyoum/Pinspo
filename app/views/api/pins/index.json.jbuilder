@pins.each do |pin|
   json.set! pin.id do 
        json.extract! pin, :title, :caption, :id
        json.image pin.image.attached? ? pin.image.url : nil
   end 
end
