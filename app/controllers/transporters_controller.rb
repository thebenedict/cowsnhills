class TransportersController < ApplicationController

  def index
	#@transporters = Transporter.search(params[:search])
	@transporters = Kaminari.paginate_array(Transporter.search(params[:search])).page(params[:page]).per(5)
	
  end

  def show
	@transporter = Transporter.find(params[:id])
  end

  def new
    @transporter = Transporter.new
  end

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
    
    @transporter.save
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

#keep transporter's deliveries. make transporter inactive?
  #~ def destroy
    #~ @transporter.destroy
    #~ respond_to do |format|
      #~ format.html { redirect_to transporters_url }
      #~ format.json { head :no_content }
    #~ end
  #~ end

  private
    def set_transporter
      @transporter = Transporter.find(params[:id])
    end

    def transporter_params
      params.require(:transporter).permit(:name, :phone, :id_number)
    end
end
