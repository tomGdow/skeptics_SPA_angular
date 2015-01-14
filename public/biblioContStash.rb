class BibliographiesController < ApplicationController
  before_filter :set_bibliography, only: [:show, :edit, :update, :destroy]

  def index
    @bibliographies = Bibliography.all
    respond_with(@bibliographies)
  end

  def show
    respond_with(@bibliography)
  end

  def new
    @bibliography = Bibliography.new
    respond_with(@bibliography)
  end

  def edit
  end

  def create
    @bibliography = Bibliography.new(params[:bibliography])
    @bibliography.save
    respond_with(@bibliography)
  end

  def update
    @bibliography.update_attributes(params[:bibliography])
    respond_with(@bibliography)
  end

  def destroy
    @bibliography.destroy
    respond_with(@bibliography)
  end

  private
  def set_bibliography
    @bibliography = Bibliography.find(params[:id])
  end
end
