class Obj < ApplicationRecord
	belongs_to :universe
	has_many :user_objs
	has_many :users, through: :user_objs
	
	BANED_CHARACTERS = /\@#:\/\\/
	validates :name, presence: true, uniqueness: { case_sensitive: false }, format: { without: BANED_CHARACTERS }
	
	serialize :data, Array
end