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

require 'rails_helper'

RSpec.describe Commodity, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
