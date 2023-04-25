# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
#     puts "Destroying tables..."
#     User.destroy_all
  
#     puts "Resetting primary keys..."
#     ApplicationRecord.connection.reset_pk_sequence!('users')
  
#     puts "Creating users..."
    
#     User.create!(
#       username: 'Demouser', 
#       email: 'demouser@gmail.com', 
#       password: 'demopassword'
#     )
  
#     # More users
#     10.times do 
#       User.create!({
#         username: Faker::Internet.unique.username(specifier: 3),
#         email: Faker::Internet.unique.email,
#         password: 'password'
#       }) 
#     end
  
#     puts "Done!"
#   end

require 'open-uri'
  User.destroy_all
  Pin.destroy_all


#users
demo_user = User.create!({username: 'DemoUser', email: 'demouser@gmail.com', password: 'demppassword'})
user1 = User.create!({username: 'Avery', email:'avery@gmail.com', password: 'averypassword'})
user2 = User.create!({username: 'Logan', email:'logan@gmail.com', password: 'loganpassword'})
user3 = User.create!({username: 'Morgan', email:'margan@gmail.com', password: 'morganpassword'})
user4 = User.create!({username: 'Riley', email:'riley@gmail.com', password: 'rileypassword'})
user5 = User.create!({username: 'Taylor', email:'taylor@gmail.com', password: 'taylorpassword'})
user6 = User.create!({username: 'Jordan', email:'joran@gmail.com', password: 'jordanpassword'})
user7 = User.create!({username: 'Alex', email:'alex@gmail.com', password: 'alexpassword'})


#pins
pin1 = Pin.create!({title: 'Cute Puppy', caption: "My heart just doubled in size.", user_id: demo_user.id})
image1 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/puppypin2.jpg")
pin1.image.attach(io: image1, filename: 'puppypin2.jpg')

pin2 = Pin.create!({title:'Beautiful drawing' ,caption:"Art is not what you see, but what you make others see.", user_id: user1.id })
image2 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/artpin1.jpg")
pin2.image.attach(io: image2, filename: 'artpin1.jpg')

pin4 = Pin.create!({title:'Watercolor painting' ,caption:"The world needs art to come alive.", user_id: user2.id })
image4 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/artpin2.jpg")
pin4.image.attach(io: image4, filename: 'artpin2.jpg')

pin5 = Pin.create!({title:'Knitting Inspiration' ,caption:"Looking for knitting inspiration? Check out these amazing ideas from Pinterest!. Get ready to cozy up with your needles and yarn and start knitting!", user_id: user3.id })
image5 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/diypin1.jpg")
pin5.image.attach(io: image5, filename: 'diypin1.jpg')

pin6 = Pin.create!({title: "Easy DIY Craft Ideas for Your Next Project", caption:"Get inspired and create something beautiful with these simple and fun DIY craft ideas, the possibilities are endless!", user_id: user4.id })
image6 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/diypin2.jpg")
pin6.image.attach(io: image6, filename: 'diypin2.jpg')

pin7 = Pin.create!({title:"DIY Birdhouses: Bring Nature Home" ,caption:"Create your own charming birdhouses with these DIY ideas and add a touch of nature to your backyard.", user_id: user5.id })
image7 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/diypin3.jpg")
pin7.image.attach(io: image7, filename: 'diypin3.jpg')

pin8 = Pin.create!({title:"Top 10 Personal Finance Tips You Need to Know" ,caption: "Take control of your finances with these expert-approved tips.", user_id: user6.id })
image8 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/financepin1.jpg")
pin8.image.attach(io: image8, filename: 'financepin1.jpg')

pin9 = Pin.create!({title: "10 Delicious and Healthy Snacks for Busy Days",caption:"Elevate your snack game with these easy and nutritious options!", user_id: user7.id})
image9 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/foodpin1.jpg")
pin9.image.attach(io: image9, filename: 'foodpin1.jpg')

pin10 = Pin.create!({title:"Indulge in these mouth-watering brownie recipes",caption: "Satisfy your sweet tooth with these delicious and easy-to-make brownies.", user_id: demo_user.id })
image10 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/foodpin2.jpg")
pin10.image.attach(io: image10, filename: 'foodpin2.jpg')

pin11 = Pin.create!({title:"Irresistible Donut Recipes You Need to Try!" ,caption: "From classic glazed to fun and creative flavors, these treats are perfect for any occasion. Indulge yourself and impress your friends and family with these easy-to-make donuts!", user_id: user1.id })
image11 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/foodpin3.jpg")
pin11.image.attach(io: image11, filename: 'foodpin3.jpg')

pin12 = Pin.create!({title: "Get your green thumb on with these gardening tips and tricks" ,caption: "From beginners to seasoned gardeners, everyone can benefit from these gardening tips and tricks. Grow your own herbs, vegetables, and flowers with ease and add some color to your outdoor space.", user_id: user2.id })
image12 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/gardeningpin1.jpg")
pin12.image.attach(io: image12, filename: 'gardeningpin1.jpg')

pin13 = Pin.create!({title:"Health Inspiration: Tips and Motivation to Live a Healthy Lifestyle",caption:"Looking for inspiration to live a healthier life? Check out these tips and tricks to help you stay motivated and on track towards your health goals.", user_id: user3.id })
image13 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/healthpin1.jpg")
pin13.image.attach(io: image13, filename: 'healthpin1.jpg')

pin14 = Pin.create!({title: "Adorable Kitten for Your Daily Dose of Cuteness" ,caption: "Need a pick-me-up? Look no further than these irresistible kitten photos.", user_id: uesr4.id })
image14 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/kitten.webp")
pin14.image.attach(io: image14, filename: 'kitten.webp')

pin15 = Pin.create!({title:"10 Cutest Puppy Breeds You Need to Follow on Instagram", caption:, user_id: user5.id })
image15 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/puppypin1.jpg")
pin15.image.attach(io: image15, filename: 'puppypin1.jpg')

pin16 = Pin.create!({title: ,caption:, user_id: user6.id })
image16 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/puppypin3.jpg")
pin16.image.attach(io: image16, filename: 'puppypin3.jpg')

pin17 = Pin.create!({title: ,caption:, user_id: user7.id })
image17 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/stlyepin2.jpg")
pin17.image.attach(io: image17, filename: 'stlyepin2.jpg')

pin18 = Pin.create!({title: ,caption:, user_id: demo_user.id })
image18 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/stylepin1.jpg")
pin18.image.attach(io: image18, filename: 'stylepin1.jpg')

pin19 = Pin.create!({title: ,caption:, user_id: user1.id })
image19 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/technologypin1.jpg")
pin19.image.attach(io: image19, filename: 'technologypin1.jpg')

pin20 = Pin.create!({title: ,caption:, user_id: user2.id })
image20 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin1.jpg")
pin20.image.attach(io: image20, filename: 'travelpin1.jpg')

pin21 = Pin.create!({title: ,caption:, user_id: user3.is })
image21 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin2.jpg")
pin21.image.attach(io: image21, filename: 'travelpin2.jpg')

pin22 = Pin.create!({title: ,caption:, user_id: user4.id })
image22 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin3.jpg")
pin22.image.attach(io: image22, filename: 'travelpin3.jpg')

pin23 = Pin.create!({title: ,caption:, user_id: user5.id })
image23 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin4.jpg")
pin23.image.attach(io: image23, filename: 'travelpin4.jpg')

pin24 = Pin.create!({title: ,caption:, user_id: user6.id })
image24 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/travelpin5.jpg")
pin24.image.attach(io: image24, filename: 'travelpin5.jpg')

pin25 = Pin.create!({title: ,caption:, user_id: user7.id })
image25 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/weddingpin1.jpg")
pin25.image.attach(io: image25, filename: 'weddingpin1.jpg')

pin26 = Pin.create!({title: ,caption:, user_id: demo_user.id })
image26 = URI.open("https://pinspo-seeds.s3.us-west-1.amazonaws.com/Pinspo+images/wellnespin2.jpg")
pin26.image.attach(io: image26, filename: 'wellnespin2.jpg')