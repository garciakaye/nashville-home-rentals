class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews, include: :listing
    end
    
    def show
		@review = find(params[:id])
		render json: @review, include: :listing
	end
end
