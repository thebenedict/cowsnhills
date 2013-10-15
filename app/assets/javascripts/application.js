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

function validate(){
	if ()
	}

$(document).on("ready page:load", function(){
	$('.help-inline').css('visibility', 'hidden');	//hide messages
	
	$('#submit-btn').on('click', function(event) {
		if (validate) {
			//passes
			console.log("passes!");
		} 
		else {
			//doesn't pass
			event.preventDefault();
			console.log("does not pass");
			}
	});
})


//~ $(document).on("ready page:load", function(){
	//~ $('.help-inline').css('visibility', 'hidden');
	//~ $('#submit-btn').prop('disabled', true);
	//~ 
	//~ //name validation
	//~ var nameField = $('#nameField');
	//~ var nameDiv = $('#nameContain');
	//~ var nameMsg = $('#nameMsg');
	//~ var nameFilter = /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
	//~ var nameError = "Name must be at least two characters!";
	//~ 
	//~ nameField.on('blur', function(){validate(nameField, nameDiv, nameMsg, nameFilter, nameError)});
	//~ 
	//~ //phone validation
	//~ var phoneField = $('#phoneField');
	//~ var phoneDiv = $('#phoneContain');
	//~ var phoneMsg = $('#phoneMsg');
	//~ var phoneFilter = /^07[0-9]{8}$/;
	//~ var phoneError = "Phone must be 10-digits and start with 07";
//~ 
	//~ phoneField.on('blur', function(){validate(phoneField, phoneDiv, phoneMsg, phoneFilter, phoneError)});
	//~ 
	//~ //id validation
	//~ var idField = $('#idField');
	//~ var idDiv = $('#idContain');
	//~ var idMsg = $('#idMsg');
	//~ var idFilter = /^[0-9]{16}$/;
	//~ var idError = "Id must be 16 digits!";
	//~ 
	//~ idField.on('blur', function(){validate(idField, idDiv, idMsg, idFilter, idError)});
	//~ 
	//~ });
	//~ 
//~ function testRegEx(value, filter){
	//~ if (filter.test(value)){
		//~ return true;
	//~ } else {
		//~ return false;
		//~ }
	//~ }
//~ 
//~ function validate(field, parentDiv, msgId, regEx, errorMsg){
		//~ //get input value and label field
		//~ var value = field.val();
		//~ var label = parentDiv.children().first();
		//~ 
		//~ //if passes regex
		//~ if (testRegEx(value, regEx)){
			//~ //success message
			//~ parentDiv.removeClass('error').addClass('success');
			//~ msgId.css('visibility', 'hidden');
			//~ label.removeClass("label-important").addClass("label-success");
			//~ //enable submit btn
			//~ if (field.get(0) === $('#nameField').get(0)){
				//~ $('#submit-btn').prop('disabled', false);
			//~ }
		//~ } else {
			//~ //error message
			//~ parentDiv.removeClass('success').addClass('error');
			//~ msgId.text(errorMsg).css('visibility', 'visible');
			//~ label.removeClass("label-success").addClass("label-important");	
			//~ //disable submit btn
			//~ if (field.get(0) === $('#nameField').get(0)){
				//~ $('#submit-btn').prop('disabled', true);
			//~ }		
			//~ }
		//~ }
