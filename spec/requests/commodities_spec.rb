require 'rails_helper'

RSpec.describe "Commodities", :type => :request do
  describe "GET /commodities" do
    it "works! (now write some real specs)" do
      get commodities_path
      expect(response.status).to be(200)
    end
  end
end
