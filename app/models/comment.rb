class Comment < ApplicationRecord
    validates :description, :commentor_id, :pin_id, presence: true

    belongs_to :commentor, class_name: 'User'
    belongs_to :pin
end