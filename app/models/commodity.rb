# == Schema Information
#
# Table name: commodities
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :text
#  price       :float
#  image_url   :string(255)
#  category    :string(255)
#  year        :integer
#  winner      :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Commodity < ActiveRecord::Base
  attr_accessible :category, :description, :image_url, :name, :price, :winner, :year


  CATEGORY_TYPES = ['Midfielder', 'Defender', 'Goalkeeper', 'Forward']
  scope :defender, -> {where("category = ?","Defender")}
  scope :midfielder, -> {where("category = ?","Midfielder")}
  scope :forward, -> {where("category = ?","Forward")}
  scope :newest, -> {order("created_at DESC")}

  has_many :line_items

  validates :name,
            :category,
            :description,
            :price,
            :presence => true

  validates :description,
            :length => { :minimum => 5 }

  validates :price,
            :numericality => {:greater_than_or_equal_to => 1 }

end
