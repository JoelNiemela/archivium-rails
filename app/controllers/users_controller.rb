class UsersController < ApplicationController
	before_action :set_user, only: [:edit, :update, :show, :destroy]
	before_action :require_same_user, only: [:edit, :update, :destroy]
   
	def new
		@user = User.new
	end
	
	def create
		@user = User.new(user_params)
		if @user.save then
			session[:user_id] = @user.id
			flash[:success] = "Welcome to archivium, #{@user.username}"
			redirect_to user_path(@user)
		else
			render 'new'
		end
	end
	
	def index
		@users = User.all
	end
	
	def show
	end
	
	def edit
		
	end
	
	def update
		if @user.update(user_params) then
			flash[:success] = "Your account was successfully updated"
			redirect_to user_path(@user)
		else
			render 'edit'
		end
	end
	
	private
	def user_params
		params.require(:user).permit(:username, :email, :password)
	end
	
	def set_user
		@user = User.find(params[:id]) 
	end
  
	def require_same_user
		if current_user != @user then
			flash[:danger] =  "You can only edit your own account"  
			redirect_to root_path
		end
	end
end