class Bibliography < ActiveRecord::Base

  attr_accessible :abstract, :accessdate, :authors, :city, :comment, :conferencetitle, :edition, :editors, :firstsurname, :isbn, :journalname, :localpdflink, :pages, :publication, :publisher, :title, :url, :volume, :websitetitle, :year

  PUBLICATION_TYPES = ['Journal', 'Book', 'Internet']

  #scope :mybook, -> {where("publication = ?","Book")}

end
