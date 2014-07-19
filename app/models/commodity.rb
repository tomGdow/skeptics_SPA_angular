class Commodity < ActiveRecord::Base
  attr_accessible :category, :description, :image_url, :name, :price, :winner, :year
end
