class CartsController < ApplicationController

  def index
    @carts = Cart.all
    @cart = current_cart

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @carts }
    end
  end

  def show
    @cart = Cart.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @cart }
    end
  end

  def your_cart
    redirect_to :action => "show", :id => current_cart.id
  end

  def new
    @cart = Cart.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @cart }
    end
  end

  def edit
    @cart = Cart.find(params[:id])
  end

  def create
    @cart = Cart.new(params[:cart])

    respond_to do |format|
      if @cart.save
        format.html { redirect_to @cart, notice: 'Cart was successfully created.' }
        format.json { render json: @cart, status: :created, location: @cart }
      else
        format.html { render action: "new" }
        format.json { render json: @cart.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @cart = Cart.find(params[:id])

    respond_to do |format|
      if @cart.update_attributes(params[:cart])
        format.html { redirect_to @cart, notice: 'Cart was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @cart.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @cart = Cart.find(params[:id])
    @cart.destroy
    session[:cart_id] = nil

    respond_to do |format|
      format.html { redirect_to '#view5',
                                notice: 'Your cart is currently empty' }
      format.js
      format.json { head :no_content }
    end
  end
end
