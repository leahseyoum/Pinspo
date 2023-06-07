json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at
  if @user.profile_photo.attached?
    json.profile_photo @user.profile_photo.url
  else
    json.profile_photo nil
  end
   json.boards @user.boards do |board|
    json.extract! board, :id, :name, :created_at, :updated_at
  end
end