require 'rails_helper'

RSpec.describe "commodities/edit", :type => :view do
  before(:each) do
    @commodity = assign(:commodity, Commodity.create!(
      :name => "MyString",
      :description => "MyText",
      :price => 1.5,
      :image_url => "MyString",
      :category => "MyString",
      :year => 1,
      :winner => false
    ))
  end

  it "renders the edit commodity form" do
    render

    assert_select "form[action=?][method=?]", commodity_path(@commodity), "post" do

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
