json.extract! pin, 
  :id, 
  :title,
  :caption,
  :link,
  :user_id
  
json.image pin.image.attached? ? pin.image.url : nil

json.comments do
     pin.comments.each do |comment|
          json.set! comment.id do
               json.extract! comment, :id, :commentor_id, :description, :created_at
          end
     end
end
