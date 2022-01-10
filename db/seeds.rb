# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding data..."

Review.destroy_all
Listing.destroy_all
Image.destroy_all

listing1 = Listing.create(name: "Nashville Greenhaus", price: 500)
listing2 = Listing.create(name: "Luxury Stay", price: 800)
listing3 = Listing.create(name: "Modern Luxury", price: 1100)

Review.create(comment: "Beautifully designed and near all the best restaurants and bars!", rating: 5, listing_id: listing1.id)
Review.create(comment: "Great place for large groups", rating: 4, listing_id: listing2.id)
Review.create(comment: "Best experience I've had! The hosts were amazing", rating: 4, listing_id: listing3.id)

Image.create(image_url: "https://a0.muscache.com/im/pictures/eae83540-64c0-48e9-bd99-16d7330a2299.jpg?im_w=1200", listing_id: listing1.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/eae83540-64c0-48e9-bd99-16d7330a2299.jpg?im_w=1200", listing_id: listing2.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/eae83540-64c0-48e9-bd99-16d7330a2299.jpg?im_w=1200", listing_id: listing3.id)



puts "✅ Done seeding!"