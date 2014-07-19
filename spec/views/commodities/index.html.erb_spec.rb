require 'rails_helper'

RSpec.describe "commodities/index", :type => :view do
  before(:each) do
    assign(:commodities, [
      Commodity.create!(
        :name => "Name",
        :description => "MyText",
        :price => 1.5,
        :image_url => "Image Url",
        :category => "Category",
        :year => 1,
        :winner => false
      ),
      Commodity.create!(
        :name => "Name",
        :description => "MyText",
        :price => 1.5,
        :image_url => "Image Url",
        :category => "Category",
        :year => 1,
        :winner => false
      )
    ])
  end

  it "renders a list of commodities" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => "Image Url".to_s, :count => 2
    assert_select "tr>td", :text => "Category".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => false.to_s, :count => 2
  end
end
