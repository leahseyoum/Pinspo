json.user do
  json.extract! @user, :id, :email, :username, :profile_photo, :created_at, :updated_at
   json.boards @user.boards do |board|
    json.extract! board, :id, :name, :created_at, :updated_at
  end
end