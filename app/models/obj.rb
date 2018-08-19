class Obj < ApplicationRecord
	belongs_to :universe
	has_many :user_objs
	has_many :users, through: :user_objs
	
	serialize :data, Array
end