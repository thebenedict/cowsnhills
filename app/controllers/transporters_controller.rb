class TransportersController < ApplicationController

  # GET /transporters
  # GET /transporters.json
  def index
    @transporters = Transporter.all
  end

  # GET /transporters/1
  # GET /transporters/1.json
  def show
  end

  # GET /transporters/new
  def new
    @transporter = Transporter.new
  end

  # GET /transporters/1/edit
  def edit
  end

  # POST /transporters
  # POST /transporters.json
  def create
    #@transporter = Transporter.new(transporter_params)
     @transporter = Transporter.new(params["transporter"])

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

  # PATCH/PUT /transporters/1
  # PATCH/PUT /transporters/1.json
  def update
    respond_to do |format|
      if @transporter.update(transporter_params)
        format.html { redirect_to @transporter, notice: 'Transporter was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @transporter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /transporters/1
  # DELETE /transporters/1.json
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
