# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  
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
      User.destroy_all
      Pin.destroy_all
      Board.destroy_all 
      BoardPin.destroy_all
     
    
#users

demo_user = User.create!({
  username: 'Demouser', 
  email: 'demouser@gmail.com', 
  password: 'demopassword'}
  )
photo1 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+user+profile/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg")
demo_user.profile_photo.attach(io: photo1 ,filename: 'charlesdeluvio-K4mSJ7kc0As-unsplash.jpg' )

user1 = User.create!({username: 'Avery', email:'avery@gmail.com', password: 'averypassword'})
photo2 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+user+profile/greg-rakozy-oMpAz-DN-9I-unsplash.jpg")
user1.profile_photo.attach(io: photo2 ,filename: 'greg-rakozy-oMpAz-DN-9I-unsplash.jpg' )

user2 = User.create!({username: 'Logan', email:'logan@gmail.com', password: 'loganpassword'})
photo3 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+user+profile/kimson-doan-HD8KlyWRYYM-unsplash.jpg")
user2.profile_photo.attach(io: photo3 ,filename: 'kimson-doan-HD8KlyWRYYM-unsplash.jpg' )

user3 = User.create!({username: 'Morgan', email:'margan@gmail.com', password: 'morganpassword'})
photo4 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+user+profile/li-shanting-AGy0SxTzqr8-unsplash.jpg")
user3.profile_photo.attach(io: photo4 ,filename: 'li-shanting-AGy0SxTzqr8-unsplash.jpg' )

user4 = User.create!({username: 'Riley', email:'riley@gmail.com', password: 'rileypassword'})
photo5 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+user+profile/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg")
user4.profile_photo.attach(io: photo5 ,filename: 'toa-heftiba-O3ymvT7Wf9U-unsplash.jpg' )

# user5 = User.create!({username: 'Taylor', email:'taylor@gmail.com', password: 'taylorpassword'})
# user6 = User.create!({username: 'Jordan', email:'joran@gmail.com', password: 'jordanpassword'})
# user7 = User.create!({username: 'Alex', email:'alex@gmail.com', password: 'alexpassword'})

#boards
board1 = Board.create({name: 'animals', description: 'The Animals board is the perfect place for all animal lovers to discover and share amazing photos and videos of creatures big and small from around the world' , user_id: demo_user.id})
board2 = Board.create({name: 'travel', description: "Roam the planet: find your next travel inspiration here" , user_id: demo_user.id})
board3 = Board.create({name: 'wellness', user_id: demo_user.id})
board4 = Board.create({name: 'nature', user_id: demo_user.id})


pin1 = Pin.create!({title:'Crossing the Great Divide: A Stunning Bridge over a Forested Ravine' , user_id: demo_user.id })
image1 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg")
pin1.image.attach(io: image1, filename: 'vecteezy_a-view-of-a-wooden-bridge-in-a-forest_1235025.jpeg')

pin2 = Pin.create!({title:"Find Your Zen: 5 Simple Meditation Techniques to Relieve Stress and Improve Focus" , user_id: user1.id })
image2 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/andy-holmes-D6TqIa-tWRY-unsplash.jpg")
pin2.image.attach(io: image2, filename: 'vecteezy_abstract-digital-art-meditation-enlightenment-background_10379461_790.jpg')

pin3 = Pin.create!({title: "Adorable and Affordable: 10 Must-Have Baby Clothes for Your Little Bundle of Joy" , user_id: user1.id })
image3 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/clarisse-meyer-d6pLNFVZt_4-unsplash.jpg")
pin3.image.attach(io: image3, filename: 'vecteezy_beautiful-baby-knitted-clothes-and-a-toy-for-a-newborn-baby_11110619_752.jpeg')

pin4 = Pin.create!({title:"Unleashing Your Inner Explorer: A Guide to Discovering the Majestic Desert Dunes" , user_id: demo_user.id })
image4 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/edgar-nKC772R_qog-unsplash.jpg")
pin4.image.attach(io: image4, filename: 'vecteezy_beautiful-landscape-of-desert-dunes-mountains-with-bright_10333880_741.jpg')

pin5 = Pin.create!({title: "Floral Muse: A Woman Amidst the Blossoms" , user_id: user1.id })
image5 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/erik-karits-FH-8fK9u1z0-unsplash.jpg")
pin5.image.attach(io: image5, filename: 'vecteezy_beauty-woman-wallpaper-paper-cut-style-ai-generated_21946460_161.jpg')

pin6 = Pin.create!({title: "The Ultimate Checklist for Camping Essentials" , user_id: user2.id })
image6 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/gabriella-clare-marino-EGXpSrG02sU-unsplash.jpg")
pin6.image.attach(io: image6, filename: 'vecteezy_enamel-coffee-mug-vintage-kettle-on-fire-at-night-camping_8938039_694.jpg')

pin7 = Pin.create!({title: "10-Minute At-Home Workout for Busy Days ", user_id: user2.id })
image7 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/gautier-salles-KqajvGvvxJI-unsplash.jpg")
pin7.image.attach(io: image7, filename: 'vecteezy_european-sportswoman-holds-dumbbells-and-stretches-legs_11317269_336.jpeg')

pin8 = Pin.create!({title: "Serene Morning: A Fisherman's View in the Fog" , user_id: demo_user.id })
image8 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/jessica-knowlden-VcHU3hC_lAM-unsplash.jpg")
pin8.image.attach(io: image8, filename: 'vecteezy_fisherman-in-red-kayak-morning-fog_886717.jpg')

pin9 = Pin.create!({title: "Sip into summer with this refreshing lychee drink" , user_id: user3.id })
image9 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg")
pin9.image.attach(io: image9, filename: 'vecteezy_fresh-lychee-drink-and-slice-peeled-with-green-leaves_11224701_63.jpeg')

pin10 = Pin.create!({title: "Vibrant Kaleidoscope: A Colorful Masterpiece" , user_id: user4.id })
image10 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/aj-robbie-BuQ1RZckYW4-unsplash.jpg")
pin10.image.attach(io: image10, filename: 'vecteezy_generative-ai-ink-black-street-graffiti-art-on-a-textured_22949120_653.jpg')

pin11 = Pin.create!({title: "Experience Nature in Style: Glamorous Camping Essentials" , user_id: user3.id })
image11 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/alexander-andrews-mEdKuPYJe1I-unsplash.jpg")
pin11.image.attach(io: image11, filename: 'vecteezy_green-glamping-cozy-camping-glamping-holiday-vacation_16859122_114.jpg')

pin12 = Pin.create!({title: "5 Yoga Poses for Stress Relief" , user_id: user2.id })
image12 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/anh-nguyen-kcA-c3f_3FE-unsplash.jpg")
pin12.image.attach(io: image12, filename: 'vecteezy_healthy-lifestyle-photo-of-gorgeous-blonde-woman-in-the-gym_15208536_446.jpg')

pin13 = Pin.create!({title: "Trunk Tales: A Majestic Elephant Enjoying a Stroll" , user_id: user4.id })
image13 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/antonio-janeski-GmdWPs9oASU-unsplash.jpg")
pin13.image.attach(io: image13, filename: 'vecteezy_here-i-go_705080.jpg')

pin14 = Pin.create!({title: "10 Interior Decoration Ideas to Transform Your Living Space" , user_id: user4.id })
image14 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/bady-abbas-VmYZe_yqxL0-unsplash.jpg")
pin14.image.attach(io: image14, filename: 'vecteezy_home-interior-with-ethnic-boho-decoration-living-room-in_23132533_270.jpg')

pin15 = Pin.create!({title: "Majestic Brown Bear in the Wild" , user_id: user3.id })
image15 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/cara-fuller-BeHRkALwXIw-unsplash.jpg")
pin15.image.attach(io: image15, filename: 'vecteezy_kamchatka-brown-bear_2408045.jpg')

pin16 = Pin.create!({title: "Bookworm's Delight"  , user_id: user1.id })
image16 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/chad-montano-eeqbbemH9-c-unsplash.jpg")
pin16.image.attach(io: image16, filename: 'vecteezy_lovely-asian-young-lady-portriat-happy-woman-lifestyle_10167705_794.jpg')

pin17 = Pin.create!({title:'Fields of lavender' , user_id: demo_user.id })
image17 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/david-hofmann-klWtuMJE8Ho-unsplash.jpg")
pin17.image.attach(io: image17, filename: 'vecteezy_minimalist-landscape-view-of-lavender-field-in-provence-france_1102809.jpg')

pin18 = Pin.create!({title:'Cheeky Monkey Business' , user_id: demo_user.id })
image18 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/faruk-melik-cevik-1NZawYILuB8-unsplash.jpg")
pin18.image.attach(io: image18, filename: 'vecteezy_monkey-with-black-ears-open-mouth-to-threaten-monkeypox_8082371_320.jpg')

pin19 = Pin.create!({title: 'Stunning mountain range with snow-capped peaks' , user_id: user1.id})
image19 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/jared-rice-NTyBbu66_SI-unsplash.jpg")
pin19.image.attach(io: image19, filename: 'vecteezy_mt-hood-over-trillium-lake-at-sunset_2076541.jpg')

pin20 = Pin.create!({title: "Stargazing under the night sky" , user_id: user2.id })
image20 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/john-verhoestra-Yh2UPFrdYoU-unsplash.jpg")
pin20.image.attach(io: image20, filename: 'https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pin+seed+images/vecteezy_nature-background-amazing-night-sky_20303711_997.jpg')

pin21 = Pin.create!({title: "Discover the Beauty of Santorini: A Traveler's Guide" , user_id: demo_user.id })
image21 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg")
pin21.image.attach(io: image21, filename: 'vecteezy_oia-town-on-santorini-island-greece-traditional-famous_6664345_697.jpg')

pin22 = Pin.create!({title: "Savoring the Sights and Sounds of Thailand" , user_id: user2.id })
image22 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/josh-hild-hTB5kokfb-0-unsplash.jpg")
pin22.image.attach(io: image22, filename: 'vecteezy_pang-ung-mae-hong-son-thailand_827512.jpg')

pin23 = Pin.create!({title: "Minimalistic Elegance: Modern Grey Interior Design Ideas" , user_id: user3.id })
image23 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/jules-bss-tvi3oh8RdTQ-unsplash.jpg")
pin23.image.attach(io: image23, filename: 'vecteezy_part-of-an-interior-with-a-modern-grey-armchair-in-3d-rendering_2073828.jpg')

pin24 = Pin.create!({title: "Purrfectly Adorable: A Feline Companion" , user_id: user4.id })
image24 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/julia-peretiatko-OHxf1ak6k8c-unsplash.jpg")
pin24.image.attach(io: image24, filename: 'vecteezy_portrait-cat-of-cute-red-ginger-adorable-animal-pet-close_11904142_187.jpg')

pin25 = Pin.create!({title: "Exquisite Italian Fresco Artwork: A Journey to the Renaissance" , user_id: user3.id })
image25 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg")
pin25.image.attach(io: image25, filename: 'vecteezy_rome-ceilng-fresco-the-father-of-eternity_712380.jpg')

pin26 = Pin.create!({title: "Equine escape" , user_id: user4.id })
image26 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/karly-jones-NllIT940nAY-unsplash.jpg")
pin26.image.attach(io: image26, filename: 'vecteezy_silhouette-cowboy-on-horseback-against-a-beautiful-sunset_7069018_215.jpg')

pin27 = Pin.create!({title: "Enchanted Spruce Forest - A Blissful Retreat into Nature" , user_id: user2.id })
image27 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/krisztina-papp-VRnb4dMwmBQ-unsplash.jpg")
pin27.image.attach(io: image27, filename: 'vecteezy_spruce-forest_1205873.jpg')

pin28 = Pin.create!({title: "Fresh Mint: Modern Interior Design Inspiration" , user_id: user1.id })
image28 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/lily-banse--YHSwy6uqvk-unsplash.jpg")
pin28.image.attach(io: image28, filename: 'vecteezy_stylish-interior-design-of-living-room-with-modern-mint_23132765_226.jpg')

pin29 = Pin.create!({title: "Paddle Boarding Adventure: Glide Through Crystal Clear Waters" , user_id: user2.id })
image29 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/roberto-nickson-6FZf3yzuodE-unsplash.jpg")
pin29.image.attach(io: image29, filename: 'vecteezy_the-slim-young-woman-in-green-sweemsuit-on-sup-boat-with-oar_17021850_64.jpg')

pin30 = Pin.create!({title: "A Royal Retreat: Exploring the Magnificent Castles of Europe" , user_id: user1.id })
image30 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/stephanie-harvey-KdVn1rN4WRI-unsplash.jpg")
pin30.image.attach(io: image30, filename: 'vecteezy_thoughtful-sad-female-in-white-cape-stands-near-white-short_11565683_830.jpeg')

pin31 = Pin.create!({title: "Wanderlust Adventures" , user_id: user1.id })
image31 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/toa-heftiba-TH6_vS1bCt8-unsplash.jpg")
pin31.image.attach(io: image31, filename: 'vecteezy_travel-and-holiday-concept_2411824.jpg')

pin32 = Pin.create!({title: "Exploring the Wild West: Stunning Nature in the Western United States" , user_id: user3.id })
image32 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/uby-yanes-ZOJqPrGDD-Y-unsplash.jpg")
pin32.image.attach(io: image32, filename: 'vecteezy_travel-and-tourism-scenes-of-the-western-united-states_6749620_683.jpg')

pin33 = Pin.create!({title: "Turkey's Rich History and Culture" , user_id: user3.id })
image33 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/uby-yanes-eGdl_GpcAas-unsplash.jpg")
pin33.image.attach(io: image33, filename: 'vecteezy_travel-to-goreme-cappadocia-turkey-the-sunrise-in-the_16683667_717.jpeg')

pin34 = Pin.create!({title: "Minimalist Haven: Clean and Chic White Interior Design" , user_id: user4.id })
image34 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/new+seed+photos+pins/wexor-tmg-L-2p8fapOA8-unsplash.jpg")
pin34.image.attach(io: image34, filename: 'vecteezy_white-color-attic-interior-room-in-3d-illustration_2074189.jpg')


# #animals 
board_pin1 = BoardPin.create({board_id: board1.id, pin_id: pin13.id})
board_pin2 = BoardPin.create({board_id: board1.id, pin_id: pin15.id})
board_pin3 = BoardPin.create({board_id: board1.id, pin_id: pin18.id})
board_pin4 = BoardPin.create({board_id: board1.id, pin_id: pin14.id})


# #travel
board_pin5 = BoardPin.create({board_id: board2.id, pin_id: pin4.id})
board_pin6 = BoardPin.create({board_id: board2.id, pin_id: pin12.id})
board_pin7 = BoardPin.create({board_id: board2.id, pin_id: pin21.id})
board_pin8 = BoardPin.create({board_id: board2.id, pin_id: pin22.id})

# #wellness
board_pin9 = BoardPin.create({board_id: board3.id, pin_id: pin12.id})
board_pin10 = BoardPin.create({board_id: board3.id, pin_id: pin7.id})

# #nature
board_pin11 = BoardPin.create({board_id: board4.id, pin_id: pin1.id})
board_pin12 = BoardPin.create({board_id: board4.id, pin_id: pin8.id})
board_pin13 = BoardPin.create({board_id: board4.id, pin_id: pin17.id})
board_pin14 = BoardPin.create({board_id: board4.id, pin_id: pin19.id})

# Comment seeds

# User: demo_user
demo_user_comment_1 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin1.id,
  description: "This is so beautiful!"
)

demo_user_comment_2 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin2.id,
  description: "Great idea for home decor!"
)

demo_user_comment_3 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin4.id,
  description: "I need to try this recipe ASAP!"
)

# User: user1
user1_comment_1 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin3.id,
  description: "Wow, I'm impressed with your creativity!"
)

user1_comment_2 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin5.id,
  description: "Where can I buy these shoes? They're amazing!"
)

user1_comment_3 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin6.id,
  description: "Such a cute DIY project! Love it!"
)

# User: user2
user2_comment_1 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin1.id,
  description: "I wish I had these skills!"
)

user2_comment_2 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin4.id,
  description: "You're my inspiration! Keep up the good work!"
)

user2_comment_3 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin7.id,
  description: "I need to add this to my bucket list!"
)

# User: user3
user3_comment_1 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin2.id,
  description: "Absolutely love this fashion style!"
)

user3_comment_2 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin5.id,
  description: "I've tried this recipe and it's delicious!"
)

user3_comment_3 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin8.id,
  description: "Can't wait to recreate this look!"
)

# User: user4
user4_comment_1 = Comment.create(
  commentor_id: user4.id,
  pin_id: pin3.id,
  description: "This inspires me to create my own version!"
)

user4_comment_2 = Comment.create(
  commentor_id: user4.id,
  pin_id: pin6.id,
  description: "I'm definitely trying this over the weekend!"
)

user4_comment_3 = Comment.create(
  commentor_id: user4.id,
  pin_id: pin9.id,
  description: "Such a clever idea! Love it!"
)

# Comment seeds

# User: demo_user
demo_user_comment_4 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin2.id,
  description: "This outfit is so stylish!"
)

demo_user_comment_5 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin5.id,
  description: "Incredible photography skills!"
)

demo_user_comment_6 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin8.id,
  description: "I'm adding this to my wishlist!"
)

# User: user1
user1_comment_4 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin4.id,
  description: "The colors in this artwork are mesmerizing!"
)

user1_comment_5 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin7.id,
  description: "I'm so inspired by this travel destination!"
)

user1_comment_6 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin9.id,
  description: "Such a unique and innovative design!"
)

# User: user2
user2_comment_4 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin1.id,
  description: "I can't stop staring at this painting!"
)

user2_comment_5 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin6.id,
  description: "I'm definitely trying this recipe for dinner!"
)

user2_comment_6 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin8.id,
  description: "This fashion trend is on point!"
)

# User: user3
user3_comment_4 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin3.id,
  description: "I need to redecorate my room like this!"
)

user3_comment_5 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin6.id,
  description: "I love how easy and fun this DIY project is!"
)

user3_comment_6 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin9.id,
  description: "Such a creative use of materials!"
)

# User: user4
user4_comment_4 = Comment.create(
  commentor_id: user4.id,
  pin_id: pin2.id,
  description: "This hairstyle is perfect for any occasion!"
)

user4_comment_5 = Comment.create(
  commentor_id: user4.id,
  pin_id: pin5.id,
  description: "I've been looking for this recipe everywhere, thank you!"
)

user4_comment_6 = Comment.create(
  commentor_id: user4.id,
  pin_id: pin7.id,
  description: "I'm dreaming of visiting this place someday!"
)

# Comment seeds

# User: demo_user
demo_user_comment_7 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin1.id,
  description: "This artwork speaks to my soul!"
)

demo_user_comment_8 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin3.id,
  description: "I'm getting major inspiration from this home decor!"
)

demo_user_comment_9 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin6.id,
  description: "This fashion look is absolutely stunning!"
)

demo_user_comment_10 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin9.id,
  description: "I'm obsessed with this DIY project!"
)

# User: user1
user1_comment_7 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin2.id,
  description: "I want to try this hairstyle right away!"
)

user1_comment_8 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin4.id,
  description: "Such a beautiful piece of jewelry!"
)

user1_comment_9 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin7.id,
  description: "This travel destination is on my bucket list!"
)

user1_comment_10 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin8.id,
  description: "I need this fashion accessory in my life!"
)

# User: user2
user2_comment_7 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin3.id,
  description: "I'm in love with the interior design of this room!"
)

user2_comment_8 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin5.id,
  description: "This recipe looks delicious and healthy!"
)

user2_comment_9 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin8.id,
  description: "I'm getting so many outfit ideas from this!"
)

user2_comment_10 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin9.id,
  description: "This DIY project is perfect for a weekend activity!"
)

# Comment seeds

# User: demo_user
demo_user_comment_11 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin10.id,
  description: "This artwork is so unique and creative!"
)

demo_user_comment_12 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin11.id,
  description: "I'm loving the color scheme of this interior design!"
)

demo_user_comment_13 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin12.id,
  description: "This recipe is perfect for a cozy night in!"
)

demo_user_comment_14 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin13.id,
  description: "Wow, this fashion collection is absolutely stunning!"
)

# User: user1
user1_comment_11 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin14.id,
  description: "I can't wait to try this DIY project!"
)

user1_comment_12 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin15.id,
  description: "This hairstyle is so elegant and classy!"
)

user1_comment_13 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin16.id,
  description: "I'm getting major wanderlust from this travel destination!"
)

user1_comment_14 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin17.id,
  description: "This outfit combination is perfect for summer!"
)

# User: user2
user2_comment_11 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin18.id,
  description: "I'm loving the artistic style of this painting!"
)

user2_comment_12 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin19.id,
  description: "This home decor idea is so creative and inspiring!"
)

user2_comment_13 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin20.id,
  description: "I'm drooling over this delicious dessert recipe!"
)

# Comment seeds

# User: demo_user
demo_user_comment_21 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin21.id,
  description: "This artwork is so captivating and thought-provoking!"
)

demo_user_comment_22 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin22.id,
  description: "I'm loving the rustic charm of this farmhouse kitchen!"
)

demo_user_comment_23 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin23.id,
  description: "This recipe is a must-try for all chocolate lovers!"
)

demo_user_comment_24 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin24.id,
  description: "Wow, this fashion trend is making a bold statement!"
)

# User: user1
user1_comment_21 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin25.id,
  description: "I'm inspired to create my own artwork after seeing this!"
)

user1_comment_22 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin26.id,
  description: "This home office setup is perfect for productivity!"
)

user1_comment_23 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin27.id,
  description: "I'm adding this recipe to my must-cook list!"
)

user1_comment_24 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin28.id,
  description: "This outfit is giving me major fashion goals!"
)

# User: user2
user2_comment_21 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin29.id,
  description: "The details in this sculpture are absolutely amazing!"
)

user2_comment_22 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin30.id,
  description: "This home decor idea is perfect for creating a cozy atmosphere!"
)

# Comment seeds

# User: demo_user
demo_user_comment_24 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin24.id,
  description: "Wow, this fashion trend is making a bold statement!"
)

demo_user_comment_25 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin25.id,
  description: "I'm inspired to create my own artwork after seeing this!"
)

demo_user_comment_26 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin26.id,
  description: "This home office setup is perfect for productivity!"
)

demo_user_comment_27 = Comment.create(
  commentor_id: demo_user.id,
  pin_id: pin27.id,
  description: "I'm adding this recipe to my must-cook list!"
)

# User: user1
user1_comment_28 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin28.id,
  description: "This outfit is giving me major fashion goals!"
)

user1_comment_29 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin29.id,
  description: "The details in this sculpture are absolutely amazing!"
)

user1_comment_30 = Comment.create(
  commentor_id: user1.id,
  pin_id: pin30.id,
  description: "This home decor idea is perfect for creating a cozy atmosphere!"
)

# User: user2
user2_comment_31 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin31.id,
  description: "I love how this photograph captures the essence of nature!"
)

user2_comment_32 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin32.id,
  description: "These DIY crafts are perfect for a fun weekend project!"
)

user2_comment_33 = Comment.create(
  commentor_id: user2.id,
  pin_id: pin33.id,
  description: "This recipe is a hit in my family! Everyone loves it!"
)

# User: user3
user3_comment_34 = Comment.create(
  commentor_id: user3.id,
  pin_id: pin34.id,
  description: "I'm in awe of this beautiful landscape painting!"
)




puts "Done!"