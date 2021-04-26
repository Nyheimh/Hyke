# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Review.destroy_all
Trail.destroy_all
User.destroy_all

@user = User.create!(username: 'topaze', name: 'Topaz Zapot', email: 'topaze@email.com', password: '123456')

puts "#{User.count} users created"

@trail = Trail.create!(user_id: @user.id, name: 'American River Trail', location: 'Macramento', duration: '2', details: 'This is a relaxing trail, that you even just jog on.', img_url:'https://images.unsplash.com/photo-1524008953912-87de42f85faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80')

puts "#{Trail.count} trail created"

@review = Review.create!(user_id: @user.id, trail_id: @trail.id, content: 'I love jogging this trail.', rating: '3')

puts "#{Review.count} review created"




