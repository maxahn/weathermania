class ApiController < ApplicationController
  def show

  end

  def new 

  end
  def test
    @query = params[:query] 
    render 'statics/index'
  end
end
