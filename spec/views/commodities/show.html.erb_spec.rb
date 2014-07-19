require 'rails_helper'

RSpec.describe "commodities/show", :type => :view do
  before(:each) do
    @commodity = assign(:commodity, Commodity.create!(
      :name => "Name",
      :description => "MyText",
      :price => 1.5,
      :image_url => "Image Url",
      :category => "Category",
      :year => 1,
      :winner => false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/1.5/)
    expect(rendered).to match(/Image Url/)
    expect(rendered).to match(/Category/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(/false/)
  end
end
