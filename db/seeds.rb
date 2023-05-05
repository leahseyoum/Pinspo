# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  User.destroy_all
  
  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')
  
  puts "Creating users..."
  
  # demo_user= User.create!(
  #   username: 'Demouser', 
  #   email: 'demouser@gmail.com', 
  #   password: 'demopassword'
  #   )
    
    
      
      # puts "Done!"
    end
    
    require 'open-uri'
      Pin.destroy_all
      Board.destroy_all 
      BoardPin.destroy_all
     
    
#users

demo_user = User.create!({
  username: 'Demouser', 
  email: 'demouser@gmail.com', 
  password: 'demopassword'}
  )
user1 = User.create!({username: 'Avery', email:'avery@gmail.com', password: 'averypassword'})
user2 = User.create!({username: 'Logan', email:'logan@gmail.com', password: 'loganpassword'})
user3 = User.create!({username: 'Morgan', email:'margan@gmail.com', password: 'morganpassword'})
user4 = User.create!({username: 'Riley', email:'riley@gmail.com', password: 'rileypassword'})
user5 = User.create!({username: 'Taylor', email:'taylor@gmail.com', password: 'taylorpassword'})
user6 = User.create!({username: 'Jordan', email:'joran@gmail.com', password: 'jordanpassword'})
user7 = User.create!({username: 'Alex', email:'alex@gmail.com', password: 'alexpassword'})

#boards
board1 = Board.create({name: 'animals', description: 'The Animals board is the perfect place for all animal lovers to discover and share amazing photos and videos of creatures big and small from around the world' , user_id: demo_user.id})
board2 = Board.create({name: 'travel', description: "Roam the planet: find your next travel inspiration here" , user_id: demo_user.id})
board3 = Board.create({name: 'wellness', user_id: demo_user.id})
board4 = Board.create({name: 'nature', user_id: demo_user.id})

pin1 = Pin.create!({title:'Crossing the Great Divide: A Stunning Bridge over a Forested Ravine' , user_id: demo_user.id })
image1 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_a-view-of-a-wooden-bridge-in-a-forest_1235025.jpeg")
pin1.image.attach(io: image1, filename: 'vecteezy_a-view-of-a-wooden-bridge-in-a-forest_1235025.jpeg')

pin2 = Pin.create!({title:"Find Your Zen: 5 Simple Meditation Techniques to Relieve Stress and Improve Focus" , user_id: user1.id })
image2 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_abstract-digital-art-meditation-enlightenment-background_10379461_790.jpg")
pin2.image.attach(io: image2, filename: 'vecteezy_abstract-digital-art-meditation-enlightenment-background_10379461_790.jpg')

pin3 = Pin.create!({title: "Adorable and Affordable: 10 Must-Have Baby Clothes for Your Little Bundle of Joy" , user_id: user1.id })
image3 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_beautiful-baby-knitted-clothes-and-a-toy-for-a-newborn-baby_11110619_752.jpeg")
pin3.image.attach(io: image3, filename: 'vecteezy_beautiful-baby-knitted-clothes-and-a-toy-for-a-newborn-baby_11110619_752.jpeg')

pin4 = Pin.create!({title:"Unleashing Your Inner Explorer: A Guide to Discovering the Majestic Desert Dunes" , user_id: demo_user.id })
image4 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_beautiful-landscape-of-desert-dunes-mountains-with-bright_10333880_741.jpg")
pin4.image.attach(io: image4, filename: 'vecteezy_beautiful-landscape-of-desert-dunes-mountains-with-bright_10333880_741.jpg')

pin5 = Pin.create!({title: "Floral Muse: A Woman Amidst the Blossoms" , user_id: user1.id })
image5 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_beauty-woman-wallpaper-paper-cut-style-ai-generated_21946460_161.jpg")
pin5.image.attach(io: image5, filename: 'vecteezy_beauty-woman-wallpaper-paper-cut-style-ai-generated_21946460_161.jpg')

pin6 = Pin.create!({title: "The Ultimate Checklist for Camping Essentials" , user_id: user1.id })
image6 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_enamel-coffee-mug-vintage-kettle-on-fire-at-night-camping_8938039_694.jpg")
pin6.image.attach(io: image6, filename: 'vecteezy_enamel-coffee-mug-vintage-kettle-on-fire-at-night-camping_8938039_694.jpg')

pin7 = Pin.create!({title: "10-Minute At-Home Workout for Busy Days ", user_id: user1.id })
image7 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_european-sportswoman-holds-dumbbells-and-stretches-legs_11317269_336.jpeg")
pin7.image.attach(io: image7, filename: 'vecteezy_european-sportswoman-holds-dumbbells-and-stretches-legs_11317269_336.jpeg')

pin8 = Pin.create!({title: "Serene Morning: A Fisherman's View in the Fog" , user_id: demo_user.id })
image8 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_fisherman-in-red-kayak-morning-fog_886717.jpg")
pin8.image.attach(io: image8, filename: 'vecteezy_fisherman-in-red-kayak-morning-fog_886717.jpg')

pin9 = Pin.create!({title: "Sip into summer with this refreshing lychee drink" , user_id: user1.id })
image9 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_fresh-lychee-drink-and-slice-peeled-with-green-leaves_11224701_63.jpeg")
pin9.image.attach(io: image9, filename: 'vecteezy_fresh-lychee-drink-and-slice-peeled-with-green-leaves_11224701_63.jpeg')

pin10 = Pin.create!({title: "Vibrant Kaleidoscope: A Colorful Masterpiece" , user_id: user1.id })
image10 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_generative-ai-ink-black-street-graffiti-art-on-a-textured_22949120_653.jpg")
pin10.image.attach(io: image10, filename: 'vecteezy_generative-ai-ink-black-street-graffiti-art-on-a-textured_22949120_653.jpg')

pin11 = Pin.create!({title: "Experience Nature in Style: Glamorous Camping Essentials" , user_id: user1.id })
image11 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_green-glamping-cozy-camping-glamping-holiday-vacation_16859122_114.jpg")
pin11.image.attach(io: image11, filename: 'vecteezy_green-glamping-cozy-camping-glamping-holiday-vacation_16859122_114.jpg')

pin12 = Pin.create!({title: "5 Yoga Poses for Stress Relief" , user_id: user1.id })
image12 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_healthy-lifestyle-photo-of-gorgeous-blonde-woman-in-the-gym_15208536_446.jpg")
pin12.image.attach(io: image12, filename: 'vecteezy_healthy-lifestyle-photo-of-gorgeous-blonde-woman-in-the-gym_15208536_446.jpg')

pin13 = Pin.create!({title: "Trunk Tales: A Majestic Elephant Enjoying a Stroll" , user_id: user1.id })
image13 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_here-i-go_705080.jpg")
pin13.image.attach(io: image13, filename: 'vecteezy_here-i-go_705080.jpg')

pin14 = Pin.create!({title: "10 Interior Decoration Ideas to Transform Your Living Space" , user_id: user1.id })
image14 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_home-interior-with-ethnic-boho-decoration-living-room-in_23132533_270.jpg")
pin14.image.attach(io: image14, filename: 'vecteezy_home-interior-with-ethnic-boho-decoration-living-room-in_23132533_270.jpg')

pin15 = Pin.create!({title: "Majestic Brown Bear in the Wild" , user_id: user1.id })
image15 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_kamchatka-brown-bear_2408045.jpg")
pin15.image.attach(io: image15, filename: 'vecteezy_kamchatka-brown-bear_2408045.jpg')

pin16 = Pin.create!({title: "Bookworm's Delight"  , user_id: user1.id })
image16 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_lovely-asian-young-lady-portriat-happy-woman-lifestyle_10167705_794.jpg")
pin16.image.attach(io: image16, filename: 'vecteezy_lovely-asian-young-lady-portriat-happy-woman-lifestyle_10167705_794.jpg')

pin17 = Pin.create!({title:'Fields of lavender' , user_id: user1.id })
image17 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_minimalist-landscape-view-of-lavender-field-in-provence-france_1102809.jpg")
pin17.image.attach(io: image17, filename: 'vecteezy_minimalist-landscape-view-of-lavender-field-in-provence-france_1102809.jpg')

pin18 = Pin.create!({title:'Cheeky Monkey Business' , user_id: demo_user.id })
image18 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_monkey-with-black-ears-open-mouth-to-threaten-monkeypox_8082371_320.jpg")
pin18.image.attach(io: image18, filename: 'vecteezy_monkey-with-black-ears-open-mouth-to-threaten-monkeypox_8082371_320.jpg')

pin19 = Pin.create!({title: 'Stunning mountain range with snow-capped peaks' , user_id: user1.id})
image19 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_mt-hood-over-trillium-lake-at-sunset_2076541.jpg")
pin19.image.attach(io: image19, filename: 'vecteezy_mt-hood-over-trillium-lake-at-sunset_2076541.jpg')

pin20 = Pin.create!({title: "Stargazing under the night sky" , user_id: user1.id })
image20 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_nature-background-amazing-night-sky_20303711_997.jpg")
pin20.image.attach(io: image20, filename: 'https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_nature-background-amazing-night-sky_20303711_997.jpg')

pin21 = Pin.create!({title: "Discover the Beauty of Santorini: A Traveler's Guide" , user_id: demo_user.id })
image21 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_oia-town-on-santorini-island-greece-traditional-famous_6664345_697.jpg")
pin21.image.attach(io: image21, filename: 'vecteezy_oia-town-on-santorini-island-greece-traditional-famous_6664345_697.jpg')

pin22 = Pin.create!({title: "Savoring the Sights and Sounds of Thailand" , user_id: user1.id })
image22 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_pang-ung-mae-hong-son-thailand_827512.jpg")
pin22.image.attach(io: image22, filename: 'vecteezy_pang-ung-mae-hong-son-thailand_827512.jpg')

pin23 = Pin.create!({title: "Minimalistic Elegance: Modern Grey Interior Design Ideas" , user_id: user1.id })
image23 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_part-of-an-interior-with-a-modern-grey-armchair-in-3d-rendering_2073828.jpg")
pin23.image.attach(io: image23, filename: 'vecteezy_part-of-an-interior-with-a-modern-grey-armchair-in-3d-rendering_2073828.jpg')

pin24 = Pin.create!({title: "Purrfectly Adorable: A Feline Companion" , user_id: user1.id })
image24 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_portrait-cat-of-cute-red-ginger-adorable-animal-pet-close_11904142_187.jpg")
pin24.image.attach(io: image24, filename: 'vecteezy_portrait-cat-of-cute-red-ginger-adorable-animal-pet-close_11904142_187.jpg')

pin25 = Pin.create!({title: "Exquisite Italian Fresco Artwork: A Journey to the Renaissance" , user_id: user1.id })
image25 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_rome-ceilng-fresco-the-father-of-eternity_712380.jpg")
pin25.image.attach(io: image25, filename: 'vecteezy_rome-ceilng-fresco-the-father-of-eternity_712380.jpg')

pin26 = Pin.create!({title: "Equine escape" , user_id: user1.id })
image26 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_silhouette-cowboy-on-horseback-against-a-beautiful-sunset_7069018_215.jpg")
pin26.image.attach(io: image26, filename: 'vecteezy_silhouette-cowboy-on-horseback-against-a-beautiful-sunset_7069018_215.jpg')

pin27 = Pin.create!({title: "Enchanted Spruce Forest - A Blissful Retreat into Nature" , user_id: user1.id })
image27 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_spruce-forest_1205873.jpg")
pin27.image.attach(io: image27, filename: 'vecteezy_spruce-forest_1205873.jpg')

pin28 = Pin.create!({title: "Fresh Mint: Modern Interior Design Inspiration" , user_id: user1.id })
image28 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_stylish-interior-design-of-living-room-with-modern-mint_23132765_226.jpg")
pin28.image.attach(io: image28, filename: 'vecteezy_stylish-interior-design-of-living-room-with-modern-mint_23132765_226.jpg')

pin29 = Pin.create!({title: "Paddle Boarding Adventure: Glide Through Crystal Clear Waters" , user_id: user1.id })
image29 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_the-slim-young-woman-in-green-sweemsuit-on-sup-boat-with-oar_17021850_64.jpg")
pin29.image.attach(io: image29, filename: 'vecteezy_the-slim-young-woman-in-green-sweemsuit-on-sup-boat-with-oar_17021850_64.jpg')

pin30 = Pin.create!({title: "A Royal Retreat: Exploring the Magnificent Castles of Europe" , user_id: user1.id })
image30 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_thoughtful-sad-female-in-white-cape-stands-near-white-short_11565683_830.jpeg")
pin30.image.attach(io: image30, filename: 'vecteezy_thoughtful-sad-female-in-white-cape-stands-near-white-short_11565683_830.jpeg')

pin31 = Pin.create!({title: "Wanderlust Adventures" , user_id: user1.id })
image31 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_travel-and-holiday-concept_2411824.jpg")
pin31.image.attach(io: image31, filename: 'vecteezy_travel-and-holiday-concept_2411824.jpg')

pin32 = Pin.create!({title: "Exploring the Wild West: Stunning Nature in the Western United States" , user_id: user1.id })
image32 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_travel-and-tourism-scenes-of-the-western-united-states_6749620_683.jpg")
pin32.image.attach(io: image32, filename: 'vecteezy_travel-and-tourism-scenes-of-the-western-united-states_6749620_683.jpg')

pin33 = Pin.create!({title: "Turkey's Rich History and Culture" , user_id: user1.id })
image33 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_travel-to-goreme-cappadocia-turkey-the-sunrise-in-the_16683667_717.jpeg")
pin33.image.attach(io: image33, filename: 'vecteezy_travel-to-goreme-cappadocia-turkey-the-sunrise-in-the_16683667_717.jpeg')

pin34 = Pin.create!({title: "Minimalist Haven: Clean and Chic White Interior Design" , user_id: user1.id })
image34 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_white-color-attic-interior-room-in-3d-illustration_2074189.jpg")
pin34.image.attach(io: image34, filename: 'vecteezy_white-color-attic-interior-room-in-3d-illustration_2074189.jpg')

pin35 = Pin.create!({title: "Hippopotamus: The King of the Water" , user_id: user1.id })
image35 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_wild-hippo-yawning-in-the-river-kruger-park_718485.jpg")
pin35.image.attach(io: image35, filename: 'vecteezy_wild-hippo-yawning-in-the-river-kruger-park_718485.jpg')

pin36 = Pin.create!({title: "Finding Inner Peace: Meditation Practices for a Busy Life" , user_id: user1.id })
image36 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_woman-practicing-meditate-on-the-park-asian-woman-doing_17012204_541.jpg")
pin36.image.attach(io: image36, filename: 'vecteezy_woman-practicing-meditate-on-the-park-asian-woman-doing_17012204_541.jpg')

pin37 = Pin.create!({title: 'Set Sail: A Memorable Boating Adventure Awaits' , user_id: user1.id })
image37 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_yacht-anchoring-in-crystal-clear-turquoise-water-in-front-of__666.jpg")
pin37.image.attach(io: image37, filename: 'vecteezy_yacht-anchoring-in-crystal-clear-turquoise-water-in-front-of__666.jpg')

pin38 = Pin.create!({title: "Into the Wilderness: A Hiking Adventure" , user_id: user1.id })
image38 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_young-couple-camping-hiking-journey-travel-trek-concept_14940655_696.jpg")
pin38.image.attach(io: image38, filename: 'vecteezy_young-couple-camping-hiking-journey-travel-trek-concept_14940655_696.jpg')

pin39 = Pin.create!({title: "A Mother's Love: Cherishing Precious Moments with Your Child" , user_id: user1.id })
image39 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_young-mother-and-child-baby-are-happy-at-home-childhood_6907776_527.jpg")
pin39.image.attach(io: image39, filename: 'vecteezy_young-mother-and-child-baby-are-happy-at-home-childhood_6907776_527.jpg')


#animals 
board_pin1 = BoardPin.create({board_id: board1.id, pin_id: pin13.id})
board_pin2 = BoardPin.create({board_id: board1.id, pin_id: pin15.id})
board_pin3 = BoardPin.create({board_id: board1.id, pin_id: pin18.id})
board_pin4 = BoardPin.create({board_id: board1.id, pin_id: pin14.id})


#travel
board_pin5 = BoardPin.create({board_id: board2.id, pin_id: pin4.id})
board_pin6 = BoardPin.create({board_id: board2.id, pin_id: pin12.id})
board_pin7 = BoardPin.create({board_id: board2.id, pin_id: pin21.id})
board_pin8 = BoardPin.create({board_id: board2.id, pin_id: pin22.id})

#wellness
board_pin9 = BoardPin.create({board_id: board3.id, pin_id: pin12.id})
board_pin10 = BoardPin.create({board_id: board3.id, pin_id: pin7.id})

#nature
board_pin11 = BoardPin.create({board_id: board4.id, pin_id: pin1.id})
board_pin12 = BoardPin.create({board_id: board4.id, pin_id: pin8.id})
board_pin13 = BoardPin.create({board_id: board4.id, pin_id: pin17.id})
board_pin14 = BoardPin.create({board_id: board4.id, pin_id: pin19.id})





# pin39 = Pin.create!({title: , user_id: })
# image39 = URI.open("")
# pin39.image.attach(io: image39, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin1 = Pin.create!({title: , caption: , user_id: })
# image1 = URI.open("")
# pin1.image.attach(io: image1, filename: '')

# pin2 = Pin.create!({title:'Beautiful drawing' ,caption:"Art is not what you see, but what you make others see.", user_id: user1.id })
# image2 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/artpin1.jpg")
# pin2.image.attach(io: image2, filename: 'artpin1.jpg')

# pin4 = Pin.create!({title:'Watercolor painting' ,caption:"The world needs art to come alive.", user_id: user2.id })
# image4 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/artpin2.jpg")
# pin4.image.attach(io: image4, filename: 'artpin2.jpg')

# pin5 = Pin.create!({title:'Knitting Inspiration' ,caption:"Looking for knitting inspiration? Check out these amazing ideas from Pinterest!. Get ready to cozy up with your needles and yarn and start knitting!", user_id: user3.id })
# image5 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/diypin1.jpg")
# pin5.image.attach(io: image5, filename: 'diypin1.jpg')

# pin6 = Pin.create!({title: "Easy DIY Craft Ideas for Your Next Project", caption:"Get inspired and create something beautiful with these simple and fun DIY craft ideas, the possibilities are endless!", user_id: user4.id })
# image6 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/diypin2.jpg")
# pin6.image.attach(io: image6, filename: 'diypin2.jpg')

# pin7 = Pin.create!({title:"DIY Birdhouses: Bring Nature Home" ,caption:"Create your own charming birdhouses with these DIY ideas and add a touch of nature to your backyard.", user_id: user5.id })
# image7 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/diypin3.jpg")
# pin7.image.attach(io: image7, filename: 'diypin3.jpg')

# pin8 = Pin.create!({title:"Top 10 Personal Finance Tips You Need to Know" ,caption: "Take control of your finances with these expert-approved tips.", user_id: user6.id })
# image8 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/financepin1.jpg")
# pin8.image.attach(io: image8, filename: 'financepin1.jpg')

# pin9 = Pin.create!({title: "10 Delicious and Healthy Snacks for Busy Days",caption:"Elevate your snack game with these easy and nutritious options!", user_id: user7.id})
# image9 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/foodpin1.jpg")
# pin9.image.attach(io: image9, filename: 'foodpin1.jpg')

# pin10 = Pin.create!({title:"Indulge in these mouth-watering brownie recipes",caption: "Satisfy your sweet tooth with these delicious and easy-to-make brownies.", user_id: user1.id })
# image10 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/foodpin2.jpg")
# pin10.image.attach(io: image10, filename: 'foodpin2.jpg')

# pin11 = Pin.create!({title:"Irresistible Donut Recipes You Need to Try!" ,caption: "From classic glazed to fun and creative flavors, these treats are perfect for any occasion. Indulge yourself and impress your friends and family with these easy-to-make donuts!", user_id: user1.id })
# image11 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/foodpin3.jpg")
# pin11.image.attach(io: image11, filename: 'foodpin3.jpg')

# pin12 = Pin.create!({title: "Get your green thumb on with these gardening tips and tricks" ,caption: "From beginners to seasoned gardeners, everyone can benefit from these gardening tips and tricks. Grow your own herbs, vegetables, and flowers with ease and add some color to your outdoor space.", user_id: user2.id })
# image12 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/gardeningpin1.jpg")
# pin12.image.attach(io: image12, filename: 'gardeningpin1.jpg')

# pin13 = Pin.create!({title:"Health Inspiration: Tips and Motivation to Live a Healthy Lifestyle",caption:"Looking for inspiration to live a healthier life? Check out these tips and tricks to help you stay motivated and on track towards your health goals.", user_id: user3.id })
# image13 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/healthpin1.jpg")
# pin13.image.attach(io: image13, filename: 'healthpin1.jpg')

# pin14 = Pin.create!({title: "Adorable Kitten for Your Daily Dose of Cuteness" ,caption: "Need a pick-me-up? Look no further than these irresistible kitten photos.", user_id: user4.id })
# image14 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/kitten.webp")
# pin14.image.attach(io: image14, filename: 'kitten.webp')

# pin15 = Pin.create!({title:"10 Cutest Puppy Breeds You Need to Follow on Instagram", caption: "Cute puppies that will melt your heart", user_id: user5.id })
# image15 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/puppypin1.jpg")
# pin15.image.attach(io: image15, filename: 'puppypin1.jpg')

# pin16 = Pin.create!({title:"Adorable Puppies That Will Melt Your Heart" ,caption: "From playful pups to snuggly companions, these adorable dogs are sure to brighten your day.", user_id: user6.id })
# image16 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/puppypin3.jpg")
# pin16.image.attach(io: image16, filename: 'puppypin3.jpg')

# pin17 = Pin.create!({title:"Stylish and Affordable Interior Design Ideas for Your Home" ,caption:"Revamp your living space with these amazing interior design ideas that won't break the bank.", user_id: user7.id })
# image17 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/stlyepin2.jpg")
# pin17.image.attach(io: image17, filename: 'stlyepin2.jpg')

# pin18 = Pin.create!({title:"Dream Kitchens: Inspiration for Your Next Renovation" ,caption: "Looking for ideas to transform your kitchen into a dream space? Check out our collection of stunning kitchens for inspiration on your next renovation project.", user_id: user1.id })
# image18 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/stylepin1.jpg")
# pin18.image.attach(io: image18, filename: 'stylepin1.jpg')

# pin19 = Pin.create!({title: "Discover the Latest Tech Innovations and Gadgets | Stay Up-to-Date with Technology Trends" ,caption: "From cutting-edge gadgets to the latest in software, our technology boards have everything you need to stay ahead of the curve.", user_id: user1.id })
# image19 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/technologypin1.jpg")
# pin19.image.attach(io: image19, filename: 'technologypin1.jpg')

# pin20 = Pin.create!({title: "Captivating Views of the Eiffel Tower: Explore the City of Love!", caption: "Fall in love with the city of love! From its charming streets to its captivating views of the Eiffel Tower, Paris has something for everyone.", user_id: user2.id })
# image20 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin1.jpg")
# pin20.image.attach(io: image20, filename: 'travelpin1.jpg')

# pin21 = Pin.create!({title:"Jaw-Dropping Views: Exploring the Grand Canyon" ,caption:"The Grand Canyon is one of the most breathtaking natural wonders in the world. From hiking to rafting, there's something for everyone. Get ready to be blown away by the stunning views and majestic landscape.", user_id: user3.id })
# image21 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin2.jpg")
# pin21.image.attach(io: image21, filename: 'travelpin2.jpg')

# pin22 = Pin.create!({title:"Get Your Motor Running: The Ultimate Road Trip Guide" ,caption: "Take to the open road with this ultimate guide to the best road trips across the country. Discover hidden gems, breathtaking views, and unforgettable experiences that will make your journey one to remember.", user_id: user4.id })
# image22 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin3.jpg")
# pin22.image.attach(io: image22, filename: 'travelpin3.jpg')

# pin23 = Pin.create!({title: "Mesmerizing Sunset Views You Can't Miss",caption:"Take a moment to appreciate the stunning beauty of nature with these breathtaking sunset views.", user_id: user5.id })
# image23 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin4.jpg")
# pin23.image.attach(io: image23, filename: 'travelpin4.jpg')

# pin24 = Pin.create!({title:"Exploring Europe: A Journey Through Time and Culture",caption: "Experience the beauty, history, and diversity of Europe through our travel guide.", user_id: user6.id })
# image24 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin5.jpg")
# pin24.image.attach(io: image24, filename: 'travelpin5.jpg')

# pin25 = Pin.create!({title: "Unforgettable Wedding Inspiration to Make Your Special Day Perfect" ,caption:"From stunning floral arrangements to breathtaking venues, get inspired for your wedding with these beautiful ideas.", user_id: user7.id })
# image25 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/weddingpin1.jpg")
# pin25.image.attach(io: image25, filename: 'weddingpin1.jpg')

# pin26 = Pin.create!({title: "Boost Your Wellness: Simple Tips for a Healthier You" ,caption: "Take charge of your well-being with these easy, yet effective tips for a healthier lifestyle.", user_id: user1.id })
# image26 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/wellnespin2.jpg")
# pin26.image.attach(io: image26, filename: 'wellnespin2.jpg')






puts "Done!"