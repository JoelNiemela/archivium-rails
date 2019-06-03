class UniversesController < ApplicationController
	before_action :set_universe, only: [:add_user, :edit, :update, :show, :destroy]
	before_action :require_same_user, only: [:add_user, :edit, :update, :destroy]
   
  def add_user
  	
  end
  
	def new
		@universe = Universe.new
	end
	
	def create
		@universe = Universe.new(universe_params)
		@universe.users = [current_user]
		if @universe.save then
			flash[:success] = "Successfully created new universe"
			redirect_to universe_path(@universe)
		else
			render 'new'
		end
	end
	
	def index
		@universes = Universe.all
	end
	
	def show
	end
	
	def edit
		
	end
	
	def update
		if params[:post][:user] then
			UserUniverse.create(:user_id => params[:post][:user].to_i, :universe => @universe)
		end
		if @universe.update(universe_params) then
			flash[:success] = "Universe was successfully updated"
			redirect_to universe_path(@universe)
		else
			render 'edit'
		end
	end
	
	def destroy
		@universe.destroy
		flash[:success] = "Universe was successfully deleted"
		redirect_to root_path
	end
	
	private
	def universe_params
		params.require(:universe).permit(:name, :users)
	end
	
	def set_universe
		@universe = Universe.find(params[:id]) 
	end
  
	def require_same_user
		if not @universe.users.include? current_user then
			flash[:danger] =  "You can only edit your own universes"  
			redirect_to root_path
		end
	end
end