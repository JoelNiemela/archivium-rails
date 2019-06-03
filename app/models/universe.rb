class Universe < ApplicationRecord
	has_many :objs
	has_many :user_universes
	has_many :users, through: :user_universes
	
	serialize :data, Array
end