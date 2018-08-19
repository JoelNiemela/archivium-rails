class ObjsController < ApplicationController
	before_action :set_obj, only: [:edit, :update, :show, :destroy]
	before_action :require_same_user, only: [:edit, :update, :destroy]
   
	def new
		@obj = Obj.new
	end
	
	def create
		@obj = Obj.new(obj_params)
		@obj.users = [current_user]
		if @obj.save then
			flash[:success] = "Successfully created new object"
			redirect_to obj_path(@obj)
		else
			render 'new'
		end
	end
	
	def index
		@objs = Obj.all
	end
	
	def show
	end
	
	def edit
		
	end
	
	def update
		@obj.data = []
		fields_name = params["obj"]["data_feilds_name"]
		fields_value = params["obj"]["data_feilds_value"]
		fields_type = params["obj"]["data_feilds_type"]
		puts fields_name
		[fields_name, fields_value, fields_type].transpose.each do |name, value, type|
			if type == "text" then
				@obj.data.push({:type => "text", :name => name, :value => value})
			elsif type == "link" then
				@obj.data.push({:type => "link", :name => name, :value => value})
			end
		end
		puts @obj.data, '------------'
		if @obj.update(obj_params) then
			flash[:success] = "Object was successfully updated"
			redirect_to obj_path(@obj)
		else
			render 'edit'
		end
	end
	
	def destroy
		@obj.destroy
		flash[:success] = "Object was successfully deleted"
		redirect_to root_path
	end
	
	private
	def obj_params
		params.require(:obj).permit(:name, :obj_type, :universe_id)
	end
	
	def set_obj
		@obj = Obj.find(params[:id]) 
	end
  
	def require_same_user
		if not @obj.users.include? current_user then
			flash[:danger] =  "You can only edit your own objects"  
			redirect_to root_path
		end
	end
end