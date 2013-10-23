// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require twitter/bootstrap
//= require_tree .

$(document).on("ready page:load", function(){
	
	$('.help-inline').css('visibility', 'hidden');	//hide messages
	
	var form = $('#formCol form');
	
	//name validation
	var nameField = $('#nameField');
	var validateName = function(){
		var nameDiv = $('#nameContain');
		var nameMsg = $('#nameMsg');
		var nameError = "Name must be at least two characters!";
		var label = nameDiv.children().first();
		if(nameField.val().length < 2){	
			//error message
			nameDiv.removeClass('has-success').addClass('has-error');
			nameMsg.text(nameError).css({visibility: 'visible'}).addClass("text-danger");
			label.removeClass("label-success").addClass("label-danger");
			return false;
		} else {
			//success message
			nameDiv.removeClass('has-error').addClass('has-success');
			nameMsg.css({visibility: 'hidden'});
			label.removeClass("label-danger").addClass("label-success");
			return true;
		}
	}
	
	//phone validation
	var phoneField = $('#phoneField');
	var phoneMsg = $('#phoneMsg');
	var phoneDiv = $('#phoneContain');
	var label = phoneDiv.children().first();
	var validatePhone = function(){
		
		if (phoneField.val().length === 0){ //phone is optional
			return true;
			}
			
		var phoneFilter = /^07[0-9]{8}$/;
		var phoneError = "Phone must be 10-digits and start with 07";
		
		if(!testRegEx(phoneField.val(), phoneFilter)){
			//error message
			phoneDiv.removeClass('has-success').addClass('has-error');
			phoneMsg.text(phoneError).css({
				visibility: 'visible'
				}).addClass("text-danger");
			label.removeClass("label-success").addClass("label-danger");
			return false;
			} else {
				//success
				return true;
				}
		}
	
	//id validation
	var idField = $('#idField');
	var idDiv = $('#idContain');
	var idMsg = $('#idMsg');
	var idLabel = idDiv.children().first();
	
	var validateId =  function(){
		var idFilter = /^[0-9]{16}$/;
		var idError = "Id must be 16 digits!";
		
		if (idField.val().length === 0){ //id number is optional
			return true;
			}
		
		if(!testRegEx(idField.val(), idFilter)){
			idDiv.removeClass('has-success').addClass('has-error');
			idLabel.removeClass("label-success").addClass("label-danger");
			idMsg.text(idError).addClass("text-danger");
			return false;
		} else {
			return true;
			}
		}

	//blur/keyup validations
	nameField.on('blur', validateName);
	phoneField.on('blur', validatePhone);
	idField.on('blur', validateId);
	
	phoneField.on('keyup', function(){
		phoneMsg.css({
			visibility: 'visible'
			});
		var currLength = $(this).val().length;
		
		if (currLength < 10){
			label.removeClass();
			phoneDiv.removeClass();
			if (currLength == 0) {
				phoneMsg.css({visibility: 'hidden'});
				}
			phoneMsg.text("Enter " + (10 - currLength) + " more digits").removeClass("text-danger");
			
		} else if (currLength > 10) {
			phoneDiv.removeClass('has-success').addClass('has-error');
			label.removeClass("label-success").addClass("label-danger");
			phoneMsg.text("That's " + (currLength - 10) + " too many digits").addClass("text-danger");
		} else {
			phoneDiv.removeClass('has-error').addClass('has-success');
			phoneMsg.css({visibility: 'hidden'});
			label.removeClass("label-danger").addClass("label-success");
			}
		});
		
	idField.on('keyup', function(){
		idMsg.css({
			visibility: 'visible'
			});
		var currLength = $(this).val().length;
		
		if (currLength < 16){
			idLabel.removeClass();
			idDiv.removeClass();
			if (currLength == 0) {
				idMsg.css({visibility: 'hidden'});
				}
			idMsg.text("Enter " + (16 - currLength) + " more digits").removeClass("text-danger");
			
		} else if (currLength > 16) {
			idDiv.removeClass('has-success').addClass('has-error');
			idLabel.removeClass("label-success").addClass("label-danger");
			idMsg.text("That's " + (currLength - 16) + " too many digits").addClass("text-danger");
		} else {
			idDiv.removeClass('has-error').addClass('has-success');
			idMsg.css({visibility: 'hidden'});
			idLabel.removeClass("label-danger").addClass("label-success");
			}
		});
		

	//submit validations
	form.on('submit', function(event) {
		if (!validateName() || !validatePhone() || !validateId()) {
			//doesn't pass, cannot submit
			event.preventDefault();
			console.log("does not pass");
		}
	}); 
})

	
function testRegEx(value, filter){
	return filter.test(value);
	}

		

