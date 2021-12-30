class UsersController < ApplicationController

    #  GET /users
    def index
        @users = Users.all

        render json: @users
    end

    # GET /users/1
    def show
        render json: @user
    end

    # POST /users
    def create
        @user = User.new(user_params)

        if @user.valid?
            @user.save
            @token = JWT.encode({user_id: @user.id}, "yerrr")
            render json: { user: @user, token: @token}, status: :created 
        else
            render json: { error: @user.errors.full_messages }, status: :not_acceptable
        end
    end

    # PATCH /users/1
    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    #  DELETE 
    def destroy
        @user.destroy
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
