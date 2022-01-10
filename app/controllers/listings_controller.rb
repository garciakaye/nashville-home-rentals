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
	
	private

	def find_listing
		@listing = Listing.find_by_id(params[:id])
	end

end
