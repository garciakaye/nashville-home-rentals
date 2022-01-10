class ImagesController < ApplicationController

    def index
        images = Image.all
        render json: images
    end
    
    def show
		@image = find(params[:id])
		render json: @image
    end
end
