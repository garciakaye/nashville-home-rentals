class ImagesController < ApplicationController

    def index
        images = Review.all
        render json: images, include: :listing
    end
    
    def show
		@image = find(params[:id])
		render json: @image, include: :listing
	end

end
