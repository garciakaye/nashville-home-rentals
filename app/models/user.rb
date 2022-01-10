class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: { case_sensitive: false }
    # validates :first_name, presence: true, uniqueness: { case_sensitive: false }
    # validates :last_name, presence: true, uniqueness: { case_sensitive: false }
    # validates :email, presence: true, uniqueness: { case_sensitive: false }

end
