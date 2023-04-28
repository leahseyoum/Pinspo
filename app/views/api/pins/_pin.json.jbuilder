json.extract! pin, 
  :id, 
  :title,
  :caption,
  :user_id
  
json.image pin.image.attached? ? pin.image.url : nil
