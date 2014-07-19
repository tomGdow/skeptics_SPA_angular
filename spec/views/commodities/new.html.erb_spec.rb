require 'rails_helper'

RSpec.describe "commodities/new", :type => :view do
  before(:each) do
    assign(:commodity, Commodity.new(
      :name => "MyString",
      :description => "MyText",
      :price => 1.5,
      :image_url => "MyString",
      :category => "MyString",
      :year => 1,
      :winner => false
    ))
  end

  it "renders new commodity form" do
    render

    assert_select "form[action=?][method=?]", commodities_path, "post" do

      assert_select "input#commodity_name[name=?]", "commodity[name]"

      assert_select "textarea#commodity_description[name=?]", "commodity[description]"

      assert_select "input#commodity_price[name=?]", "commodity[price]"

      assert_select "input#commodity_image_url[name=?]", "commodity[image_url]"

      assert_select "input#commodity_category[name=?]", "commodity[category]"

      assert_select "input#commodity_year[name=?]", "commodity[year]"

      assert_select "input#commodity_winner[name=?]", "commodity[winner]"
    end
  end
end
