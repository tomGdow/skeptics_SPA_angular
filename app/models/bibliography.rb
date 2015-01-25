# == Schema Information
#
# Table name: bibliographies
#
#  id              :integer          not null, primary key
#  firstsurname    :string(255)
#  authors         :text
#  year            :integer
#  title           :text
#  journalname     :string(255)
#  publication     :string(255)
#  volume          :string(255)
#  pages           :string(255)
#  url             :string(255)
#  localpdflink    :string(255)
#  accessdate      :string(255)
#  websitetitle    :string(255)
#  conferencetitle :string(255)
#  publisher       :string(255)
#  city            :string(255)
#  editors         :string(255)
#  edition         :string(255)
#  comment         :text
#  isbn            :string(255)
#  abstract        :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Bibliography < ActiveRecord::Base

  attr_accessible :abstract, :accessdate, :authors, :city, :comment, :conferencetitle, :edition, :editors, :firstsurname, :isbn, :journalname, :localpdflink, :pages, :publication, :publisher, :title, :url, :volume, :websitetitle, :year

  PUBLICATION_TYPES = ['Journal', 'Book', 'Internet']

  scope :journal, -> {where("publication = ?","Journal")}
  scope :internet, -> {where("publication = ?","Internet")}
  scope :book, -> {where("publication = ?","Book")}
  scope :localstore, -> {where("localpdflink = ?","*.pdf")}


  def previous
    Bibliography.where(["id < ?", id]).last
  end

  def next
    Bibliography.where(["id > ?", id]).first
  end

end
