class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews, include: :listing
    end
    
    def show
		@review = find(params[:id])
		render json: @review, include: :listing
	end

    def create
        @review = Review.new(review_params)
        
        if @review.save
            render json: @review, status: :created, location: @review
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end

    def update
        if @review.update(review_params)
            render json: @review
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.require(:review).permit(:comment, :rating)
    end
end
