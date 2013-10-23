/*Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
*/

$(document).on("ready page:load", function(){
	var form = $('#deliveryform');
	
	//price
	var currPrice = $('#currPrice'),
		priceContain = $('#priceContain'),
		priceMsg = $('#priceMsg');
		
	//accepted
	var accepted = $('#accepted'),
		acceptedContain = $('#acceptedContain'),
		acceptedMsg = $('#acceptMsg');
	
	//rejected
	var rejected = $('#rejected'),
		rejectedContain = $('#rejectedContain'),
		rejectedMsg = $('#rejectMsg');
	
	$('.help-inline').css('visibility', 'hidden');	//hide messages
	
	var validate = function(input, contain, msg){
		var error = "This field must be a number";
		
		if (input.val() == ""){
			//empty field becomes 0
			input.val(0);
			}
			
		if(isNaN(input.val())){
			//not a number or is empty string
			contain.removeClass('has-success').addClass('has-error');
			msg.text(error).css({visibility: 'visible'}).addClass("text-danger");
			return false;
		} else {
			return true;
		}
	};

	
	form.on('submit', function(e){
		
		var p = validate(currPrice, priceContain, priceMsg);
		var a = validate(accepted, acceptedContain, acceptedMsg);
		var r = validate(rejected, rejectedContain, rejectedMsg);
		
		if(!p || !a || !r){		//does not pass validations
			e.preventDefault();
			}
		});
})
