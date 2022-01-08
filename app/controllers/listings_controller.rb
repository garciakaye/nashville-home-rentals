class ListingsController < ApplicationController

	def index
		@listings = Listing.all
		render json: @listings
	end
	
	def show
		@listing = find(params[:id])
		render json: @listing
	end

	# private

	# def find_listing
	# 	@listing = Listing.find_by_id(params[:id])
	# end

end
