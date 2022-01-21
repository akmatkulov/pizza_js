class AddProducts < ActiveRecord::Migration[6.1]
  def change

    Product.create :title => 'Hawaiin', :description => 'This is Hawaiin Pizza', :price => 350, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/haawain.jpg'

    Product.create :title => 'Pepperoni', :description => 'This is Pepperoni Pizza', :price => 450, :size => 30, :is_spicy => true, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/pepperoni.jpg'

    Product.create :title => 'Vegatable', :description => 'This is Vegatable Pizza', :price => 400, :size => 30, :is_spicy => false, :is_veg => true, :is_best_offer => false, :path_to_image => '/images/vegitable.png'

  end
end
