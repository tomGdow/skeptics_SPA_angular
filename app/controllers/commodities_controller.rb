class CommoditiesController < ApplicationController

  require 'writeJSON'

  def index
    @commodities = Commodity.all.to_json
    respond_to do |format|
      format.html # index.html.erb
      #format.js

      format.json { render json: @commodities }
    end
  end

  def show
    @commodity = Commodity.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.js
      format.json { render json: @commodity }
    end
  end

  def new
    @commodity = Commodity.new

    respond_to do |format|
      format.html # new.html.erb
      format.js
      format.json { render json: @commodity }
    end
  end

  def edit
    @commodity = Commodity.find(params[:id])

    respond_to do |format|
      format.js
      format.json { render json: @commodity }
    end
  end

  def create
    @commodity = Commodity.new(params[:commodity])

    respond_to do |format|
      if @commodity.save
       SKEPTICS.write_commodities_to_json
        #format.js
        format.html { redirect_to @commodity, notice: 'Commodity was successfully created.' }
        format.json { render json: @commodity, status: :created, location: @commodity }

      else
        format.html { render action: "new" }
        format.json { render json: @commodity.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @commodity = Commodity.find(params[:id])

    respond_to do |format|
      if @commodity.update_attributes(params[:commodity])
        SKEPTICS.write_commodities_to_json
        format.html { redirect_to @commodity, notice: 'Commodity was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @commodity.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @commodity = Commodity.find(params[:id])
    @commodity.destroy

    respond_to do |format|
      format.html { redirect_to commodities_url }
      format.js
      format.json { head :no_content }
    end

    if @commodity.destroy
      SKEPTICS.write_commodities_to_json
    end
  end
end
