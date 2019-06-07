class ObjsController < ApplicationController
	before_action :set_obj, only: [:edit, :update, :show, :destroy]
	before_action :require_same_user, only: []
	before_action :require_same_user_or_universe, only: [:edit, :update, :destroy]
   
	def new
		data = []
		type = params["type"]
		case type
			when "Character" then
				data =
				[
					{:name=>"general", :data=>[
						{:name=>"birth", :type=>"text", :value=>"", :timeframes=>false},
						{:name=>"death", :type=>"text", :value=>"", :timeframes=>false}
					]}
				]
			when "Location" then
				data =
				[
					{:name=>"general", :data=>[
						
					]}
				]
			when "Item" then
				data =
				[
					{:name=>"general", :data=>[
						
					]}
				]
			else
				data = [{:name=>"general", :data=>data}]
		end
		@obj = Obj.new
		@obj.data = data
	end
	
	def create
		@obj = Obj.new(obj_params)
		@obj.users = [current_user]
		read_form
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
		read_form
		
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
	def read_form
		@obj.data = []
		obj_data_params = params["obj"] || []
		
		puts obj_data_params, '------------'
		
		(obj_data_params[:tabs]||[]).each do |tab_id, tab_params|
			tab = {:name => tab_params[:name], :data => []}
			(tab_params[:feilds]||[]).each do |feild_id, feild_params|
				if feild_params[:time] == "on" then
					feild = {:name => feild_params[:name], :type => feild_params[:type], :values => [], :timeframes => true}
					(feild_params[:frames]||[]).each do |frame_id, frame_params|
						frame = {:value => frame_params[:value], :start => (frame_params[:time]||[])[:start], :end => (frame_params[:time]||[])[:end]}
						feild[:values].push(frame)
					end
				else
					feild = {:name => feild_params[:name], :type => feild_params[:type], :value => feild_params[:value], :timeframes => false}
				end
				tab[:data].push(feild)
			end
			@obj.data.push(tab)
		end
		
		puts @obj.data, '------------'
	end
	
	def obj_params
		params.require(:obj).permit(:name, :obj_type, :universe_id, :tabs)
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
	
	def require_same_user_or_universe
		if not (@obj.users.include? current_user or @obj.universe.users.include? current_user) then
			flash[:danger] =  "You can only edit your own objects"  
			redirect_to root_path
		end
	end
end