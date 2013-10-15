class DeliveriesController < ApplicationController
  before_action :set_delivery, only: [:show, :edit, :update, :destroy]

  def index
    @deliveries = Delivery.all
  end

  def show
  end

  def new
	@transporter = Transporter.find(params[:id])
    @delivery = @transporter.deliveries.build
    @delivery.transporter_id = @transporter.id
  end

  def edit
	@transporter = Transporter.find(params[:id])
    @delivery = @transporter.deliveries.find(params[:id])
    @delivery.transporter_id = @transporter.id
  end


  def create
	@transporter = Transporter.find(params[:id])
    @delivery = @transporter.deliveries.build(delivery_params)

    respond_to do |format|
      if @delivery.save
        format.html { redirect_to @transporter, notice: 'Delivery was successfully created.' }
        format.json { render action: 'show', status: :created, location: @delivery }
      else
        format.html { render action: 'new' }
        format.json { render json: @delivery.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @delivery.update(delivery_params)
        format.html { redirect_to @delivery, notice: 'Delivery was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @delivery.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @delivery.destroy
    respond_to do |format|
      format.html { redirect_to deliveries_url }
      format.json { head :no_content }
    end
  end

  private
    def set_delivery
      @delivery = Delivery.find(params[:id])
    end

    def delivery_params
      params.require(:delivery).permit(:current_price, :amount_accepted, :amount_rejected, :comments)
    end
end
