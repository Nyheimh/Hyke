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
Trail.create!(user_id: @user.id, name: 'Half Moon Bay Coastside Trail', location: 'Half Moon Bay, CA', duration: '6', details: 'Easy and scenic hiking trail along the Pacific coast that measures six miles round trip.', img_url:'https://images.unsplash.com/photo-1520399736190-374689e588f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
Trail.create!(user_id: @user.id, name: 'Rubicon Trail', location: 'South Lake Tahoe', duration: '16.4', details: 'Rubicon Trail is a 16.4 mile heavily trafficked out and back trail located near South Lake Tahoe, California that features a lake and is rated as moderate. The trail is primarily used for hiking, running, camping, and nature trips and is best used from April until September.', img_url:'https://images.unsplash.com/photo-1599838058488-e9eff3d4e657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')
Trail.create!(user_id: @user.id, name: 'Moro Rock Trail', location: 'Sequoia National Park, Sequoia and Kings Canyon National Park, CA 93262', duration: '0.6', details: 'This is a relaxing trail, that you even just jog on.', img_url:'https://images.unsplash.com/photo-1524008953912-87de42f85faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80')
Trail.create!(user_id: @user.id, name: 'Cascade Falls Trail', location: 'South Lake Tahoe, CA', duration: '1.4', details: 'Cascade Falls Trail is a 1.4 mile heavily trafficked out and back trail located near South Lake Tahoe, California that features a lake and is rated as moderate. ', img_url:'https://images.unsplash.com/photo-1596062365816-55feb161e0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')
Trail.create!(user_id: @user.id, name: 'Mt. Tallac Trail', location: 'South Lake Tahoe, CA', duration: '10', details: 'Mount Tallac Overview Mount Tallac is probably the most recognizable of the Tahoe Area peaks. With its distinctive "cross" of snow rising directly above the southwest corner of Lake Tahoe, Mount Tallac commands attention.', img_url:'https://californiathroughmylens.com/wp-content/uploads/2019/10/mt-tallac-29-640x427.jpg')
Trail.create!(user_id: @user.id, name: 'Tomales Point Trail', location: 'Point Reyes, CA', duration: '9.4', details: 'Tomales Point Trail is a 9.4 mile heavily trafficked out and back trail located near Marshall, California that offers the chance to see wildlife and is rated as moderate. ', img_url:'https://images.unsplash.com/photo-1573257722411-922fd87b756a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')
Trail.create!(user_id: @user.id, name: 'Mist Trail', location: 'Yosemite National Park, CA', duration: '5.4', details: 'Nevada Falls via the Mist Trail is a 5.4 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a lake and is rated as difficult. The trail is primarily used for hiking and backpacking.', img_url:'https://images.unsplash.com/photo-1609936818843-7572c918dcee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')
Trail.create!(user_id: @user.id, name: 'Mt. Hollywood Trail', location: 'Griffith Park, CA', duration: '5.3', details: 'Mt. Hollywood Trail is a 5.3 mile heavily trafficked loop trail located near Los Angeles, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.', img_url:'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
Trail.create!(user_id: @user.id, name: 'Mt. Tamalpais State Park', location: 'Mill Valley, CA', duration: '7.5', details: '2,500-foot high mountain in Marin with its 360-degree view from San Francisco Bay to the Pacific.', img_url:'https://images.unsplash.com/photo-1489996833391-87afa2532240?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
Trail.create!(user_id: @user.id, name: 'Mission Peak Regional Preserve', location: 'Macramento', duration: '6.2', details: 'At 2,517 feet, Mission Peak towers over the southern arm of the San Franciso Bay. It offers a 360-degree panorama that extends from San Jose to Mount Tamalpais. On a clear day, you can even see the Sierra Nevada range to the east.', img_url:'http://coellefornia.us/wp-content/uploads/2017/09/mission-peak-e1505750321230.jpg')
Trail.create!(user_id: @user.id, name: 'Kokohead Crater Trail', location: 'Oahu, HI', duration: '1.6', details: 'Koko Crater Tramway to Kokohead Lookout is a 1.6 mile heavily trafficked out and back trail located near Honolulu, Hawaii that features a great forest setting and is rated as moderate. The trail is primarily used for hiking and is accessible year-round.', 
img_url:'https://images.unsplash.com/photo-1523933553793-7b3b60a7ab8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')

puts "#{Trail.count} trail created"

@review = Review.create!(user_id: @user.id, trail_id: @trail.id, content: 'I love jogging this trail.', rating: '3')
Review.create!(user_id: @user.id, trail_id: @trail.id, content: 'I love this trail amazing views.', rating: '4')
Review.create!(user_id: @user.id, trail_id: @trail.id, content: 'I love this trail, must see for everyone.', rating: '5')
Review.create!(user_id: @user.id, trail_id: @trail.id, content: 'I love this trail.', rating: '4')
Review.create!(user_id: @user.id, trail_id: @trail.id, content: 'I love this trail, everything amazing.', rating: '5')


puts "#{Review.count} review created"




