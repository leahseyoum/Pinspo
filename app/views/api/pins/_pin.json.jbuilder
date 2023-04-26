json.extract! pin, 
  :id, 
  :title,
  :caption
  
json.image pin.image.attached? ? pin.image.url : nil