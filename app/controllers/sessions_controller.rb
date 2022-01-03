class SessionsController < ApplicationController

    def get_current_user
        render json: current_user
        # retrieve a token and decode that token in order to get current user
    end

end