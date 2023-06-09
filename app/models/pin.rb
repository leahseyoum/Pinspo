class Pin < ApplicationRecord
    validates :title, :user_id, presence: true
    # validates :title, length: { minimum: 3, maximum: 60 }
    validates :caption, length: { maximum: 200 }
    # validate :image_attached?
    # validate :caption_too_long?

    has_many :comments

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
        
    has_one_attached :image

    has_many :board_pin_connections,
        foreign_key: :pin_id,
        class_name: :BoardPin,
        dependent: :destroy

    has_many :boards,
        through: :board_pin_connections,
        source: :board

    # def caption_too_long?
    #     if caption.length > 255
    #         errors[:body] << "Caption is too long (maximum is 255 characters)"
    #     end
    # end

    def image_attached?
        unless image.attached?
          errors.add(:image, "must be attached")
        end
    end
end
