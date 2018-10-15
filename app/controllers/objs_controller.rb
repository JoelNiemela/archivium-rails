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
		fields_time = params["obj"]["data_feilds_time"]
		fields_time_start = params["obj"]["data_feilds_time_start"]
		fields_time_end = params["obj"]["data_feilds_time_end"]
		puts fields_time, '-----------------'
		bool_fields_time = []
		for i in 0..(fields_time.length-1) do
			if fields_time[i+1] == "on" then
				next
			else
				if fields_time[i] == "on" then
					bool_fields_time.push(true)
				else
					bool_fields_time.push(false)
				end
			end
		end
		fields_time = bool_fields_time
		puts fields_time, '-----------------'
		puts fields_name, '-----------------'
		puts fields_value, '-----------------'
		puts fields_type, '-----------------'
		puts fields_time_start, '-----------------'
		puts fields_time_end, '-----------------'
		[fields_name, fields_value, fields_type, fields_time, fields_time_start, fields_time_end].transpose.each do |name, value, type, time, time_start, time_end|
			if time then
				if type == "text" then
					field = {:type => "text", :name => name, :values => [], :timeframes => true}
					[value.values, time_start.values, time_end.values].transpose.each do |val, tstart, tend|
						field[:values].push({:value => val, :start => tstart, :end => tend})
					end
					@obj.data.push(field)
				elsif type == "link" then
					field = {:type => "link", :name => name, :values => [], :timeframes => true}
					[value.values, time_start.values, time_end.values].transpose.each do |val, tstart, tend|
						field[:values].push({:value => val, :start => tstart, :end => tend})
					end
					@obj.data.push(field)
				end
			else
				if type == "text" then
					@obj.data.push({:type => "text", :name => name, :value => value[0.to_s], :timeframes => false})
				elsif type == "link" then
					@obj.data.push({:type => "link", :name => name, :value => value[0.to_s], :timeframes => false})
				end
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
		params.require(:obj).permit(:name, :obj_type, :universe_id, :data)
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