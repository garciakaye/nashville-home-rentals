class ListingsController < ApplicationController

	def index
		@listings = Listing.all
		render json: @listings, include: [:reviews, :images]
	end
	
	def show
		find_listing
		# @listing = find(params[:id])
		render json: @listing, include: [:reviews, :images]
	end

	def create
		@listing = Listing.new(listing_params)
	end

	# def destroy
	# 	find_listing
	# 	@listing.destroy
	# end
	
	private

	def find_listing
		@listing = Listing.find_by_id(params[:id])
	end

	def listing_params
		params.require(:listing).permit(:name, :price, :images)
	end
end
