class Pin < ApplicationRecord
    validates :title, :caption, :user_id, presence: true
    validate :caption_too_long?

    belongs_to :user

    def caption_too_long?
        if caption.length > 255
            errors[:body] << "Caption is too long (maximum is 255 characters)"
        end
    end
end
