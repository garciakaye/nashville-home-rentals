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

listing1 = Listing.create(name: "Nashville Greenhaus I", price: 500)
listing2 = Listing.create(name: "Nashville Greenhaus II", price: 500)
listing3 = Listing.create(name: "Nashville Modern Luxury I", price: 800)
listing4 = Listing.create(name: "Nashville Modern Luxury II", price: 800)
listing5 = Listing.create(name: "Nashville Modern Luxury III", price: 800)

Review.create(comment: "Beautifully designed and near all the best restaurants and bars!", rating: 5, listing_id: listing1.id)
Review.create(comment: "Great place for large groups", rating: 4, listing_id: listing2.id)
Review.create(comment: "Best experience I've had! The hosts were amazing", rating: 4, listing_id: listing3.id)
Review.create(comment: "The beds were so comfortable. My family and I had a great time!", rating: 4, listing_id: listing4.id)
Review.create(comment: "I highly recommend staying here if you're in Nashville. The space was so clean and spacious!", rating: 4, listing_id: listing5.id)

# listing1
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-49726684/original/0ca703c5-a08d-4d84-ad44-b49596c16bfc.jpeg?im_w=1200", listing_id: listing1.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-49726684/original/53a3d593-8cab-49b1-86d1-3850d4b63e1c.jpeg?im_w=720", listing_id: listing1.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-49726684/original/e3cdfc76-cd5d-45b5-bc0c-430428611e71.jpeg?im_w=1200", listing_id: listing1.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-49726684/original/953a8727-53c1-4a16-9f38-dcee9de4962f.jpeg?im_w=720", listing_id: listing1.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-49726684/original/d633c448-ed70-4f68-80b7-ac98a08170d5.jpeg?im_w=720", listing_id: listing1.id)


# listing2
Image.create(image_url: "https://a0.muscache.com/im/pictures/c7345789-a686-4bfd-a17b-41767f5bb054.jpg?im_w=1200", listing_id: listing2.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51878126/original/7cdcb9b6-0358-4ea4-be17-2c6b37a63d65.jpeg?im_w=720", listing_id: listing2.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/9be04e63-8aa8-4829-9cf1-a7800fdd8756.jpg?im_w=720", listing_id: listing2.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/408493b8-dbdb-4d6d-a2dd-8b3a465e9796.jpg?im_w=1200", listing_id: listing2.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/4dfd9f68-1216-4656-85ab-23cb028adec9.jpg?im_w=720", listing_id: listing2.id)


# listing3
Image.create(image_url: "https://a0.muscache.com/im/pictures/65ee3bd2-8f84-4b29-95f1-379f629cd938.jpg?im_w=720", listing_id: listing3.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/3a2cb556-adca-4e5d-9309-d657e8b34ce8.jpg?im_w=1440", listing_id: listing3.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51170673/original/64cc4596-35df-4d77-8550-c1653122f7be.png?im_w=1200", listing_id: listing3.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/eae83540-64c0-48e9-bd99-16d7330a2299.jpg?im_w=720", listing_id: listing3.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/35ad5512-8002-4a51-b2f9-6e580bad0aee.jpg?im_w=720", listing_id: listing3.id)


# listing4
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/7b9674c0-43fd-4a8b-b95e-5b40b2b32b45.jpeg?im_w=1200", listing_id: listing4.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/d2654295-6361-4248-a906-3b39e0375f2b.jpeg?im_w=720", listing_id: listing4.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/cf41d0bb-82ae-4100-b8da-bab435773b7b.jpeg?im_w=1200", listing_id: listing4.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/f962a433-4bfa-4363-907f-87d505fa9283.jpeg?im_w=720", listing_id: listing4.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/69eabc34-90f9-4115-b1cc-be1d5a3dd61a.jpeg?im_w=720", listing_id: listing4.id)

# listing5
Image.create(image_url: "https://a0.muscache.com/im/pictures/88bfb4e2-07ad-45ef-849e-85e7321c1269.jpg?im_w=720", listing_id: listing5.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/5e469a93-5743-45b4-bca5-8086c96498fd.jpg?im_w=1200", listing_id: listing5.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/62c80c7f-ec5e-41f7-b7ea-b26b4375e1a3.jpg?im_w=720", listing_id: listing5.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/miso/Hosting-52184480/original/93575f07-56ab-46d1-8c97-b696ab4d0bd8.jpeg?im_w=720", listing_id: listing5.id)
Image.create(image_url: "https://a0.muscache.com/im/pictures/f992bbc6-3130-4b2d-912d-325ded52e3d2.jpg?im_w=1200", listing_id: listing5.id)

puts "✅ Done seeding!"