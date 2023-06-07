class Board < ApplicationRecord
    validates :name, :user_id, presence: true
    # validates :name, uniqueness: { scope: :user_id }
    validates :name, length: { in: 3..30 }
    validates :description, length: {in: 0..200}, allow_nil: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :board_pin_connections,
        foreign_key: :board_id,
        class_name: :BoardPin,
        dependent: :destroy
    
    has_many :pins,
        through: :board_pin_connections,
        source: :pin
    
    def remove_pin(pin)
        board_pin_connections.find_by(pin_id: pin.id).destroy
    end

    
end
