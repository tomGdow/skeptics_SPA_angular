class HomeController < ApplicationController
  def index
    @cart = current_cart
  end

  def show
    @cart = current_cart
  end

  def new
    @cart = current_cart

    respond_to do |format|
      format.js
    end
  end
end
