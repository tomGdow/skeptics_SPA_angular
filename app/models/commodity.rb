class Commodity < ActiveRecord::Base
  attr_accessible :category, :description, :image_url, :name, :price, :winner, :year


  def self.search(search_query, search)

    case search

      when "search_name"
        find :all, conditions: ["commodities.name LIKE ?", "%#{search_query}%"]

      when "search_category"
        find :all, conditions: ["category LIKE ?", "%#{search_query}%"]

      when "search_description"
        find :all, conditions: ["description LIKE ?", "%#{search_query}%"]

      when "search_all"
        find :all, conditions: ["name LIKE ? OR category LIKE ? OR price LIKE ? OR description LIKE ?",
                                "%#{search_query}%",
                                "%#{search_query}%",
                                "%#{search_query}%",
                                "%#{search_query}%"]
      else
        find :all
    end
  end


end
