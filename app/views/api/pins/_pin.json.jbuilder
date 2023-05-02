json.extract! pin, 
  :id, 
  :title,
  :caption,
  :link,
  :user_id
  
json.image pin.image.attached? ? pin.image.url : nil
