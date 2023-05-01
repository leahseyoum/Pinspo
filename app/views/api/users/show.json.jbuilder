json.user do
  json.extract! @user, :id, :email, :username, :profile_photo, :created_at, :updated_at
end