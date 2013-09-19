class TransportersController < ApplicationController

  # GET /transporters
  # GET /transporters.json
  def index
    @transporters = Transporter.all
  end

  # GET /transporters/1
  # GET /transporters/1.json
  def show
	@transporter = Transporter.find(params[:id])
  end

  # GET /transporters/new
  def new
    @transporter = Transporter.new
    @transporter.save
  end

  # GET /transporters/1/edit
  def edit
	@transporter = Transporter.find(params[:id])
  end

  def create
    @transporter = Transporter.new(transporter_params)
	
    respond_to do |format|
      if @transporter.save
        format.html { redirect_to @transporter, notice: 'Transporter was successfully created.' }
        format.json { render action: 'show', status: :created, location: @transporter }
      else
        format.html { render action: 'new' }
        format.json { render json: @transporter.errors, status: :unprocessable_entity }
      end
    end
    end

  def update
	@transporter = Transporter.find(params[:id])
      if @transporter.update_attributes(transporter_params) #
		flash[:success] = "Transporter updated"
		redirect_to @transporter
      else
		render 'edit'
      end
    end

  def destroy
    @transporter.destroy
    respond_to do |format|
      format.html { redirect_to transporters_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transporter
      @transporter = Transporter.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def transporter_params
      params.require(:transporter).permit(:name, :phone, :id_number)
    end
end
