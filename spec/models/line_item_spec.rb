# == Schema Information
#
# Table name: line_items
#
#  id           :integer          not null, primary key
#  commodity_id :integer
#  cart_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  quantity     :integer          default(1)
#

require 'rails_helper'

RSpec.describe LineItem, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
