json.user do
  if @user.present?
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
      
      if @user.profile_photo.attached?
        json.profile_photo @user.profile_photo.url
      else
        json.profile_photo nil
      end
    
    json.boards do
      if @user.boards.length > 0 
        @user.boards.each do |board|
          json.set! board.id do
            json.extract! board, :id, :name, :created_at, :updated_at
          end
        end
      else
        json.array! []
      end
    end
  end

end

