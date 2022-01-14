class ReviewsController < ApplicationController

	def index
		reviews = Review.all
		render json: reviews, include: :listing
	end
    
  def show
		find_review
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
		find_review
		if @review
				@review.update(review_params)
				render json: @review, status: :accepted
		else
				render json: {error: "review not found"}, status: :not_found
		end
	end

	def destroy
		find_review
		if @review
				@review.destroy
				render json: {}
		else
				render json: {error: "review not found"}, status: :not_found
		end
	end

  private

	def find_review
		@review = Review.find_by_id(params[:id])
	end

	def review_params
		params.require(:review).permit(:comment, :listing_id)
	end
end
