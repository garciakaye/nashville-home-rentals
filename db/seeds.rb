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

listing1 = Listing.create(image: "https://a0.muscache.com/im/pictures/4dfd9f68-1216-4656-85ab-23cb028adec9.jpg", name: "Nashville Greenhaus", price: 500)
listing2 = Listing.create(image: "https://a0.muscache.com/im/pictures/b56b68b0-0d5c-4645-989c-a8002377bd13.jpg", name: "Luxury Stay", price: 800)
listing3 = Listing.create(image: "https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/857b3c5c-1ba9-4150-a030-923bc0f59a98.jpeg", name: "Modern Luxury", price: 1100)

Review.create(comment: "Beautifully designed and near all the best restaurants and bars!", rating: 5, listing_id: listing1.id)
Review.create(comment: "Great place for large groups", rating: 4, listing_id: listing2.id)
Review.create(comment: "Best experience I've had! The hosts were amazing", rating: 4, listing_id: listing3.id)



puts "✅ Done seeding!"