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
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$('.help-inline').css('visibility', 'hidden');
	
	var phoneField = $('#phoneField');
	var phoneDiv = $('#phoneContain');
	var phoneMsg = $('#phoneMsg');
	var phoneFilter = /^[0-9]{10}$/;
	var phoneError = "Woops! Please write a 10-digit phone number";

	phoneField.on('blur', function(){validate(phoneField, phoneDiv, phoneMsg, phoneFilter, phoneError)});
	
	var nameField = $('#nameField');
	var nameDiv = $('#nameContain');
	var nameMsg = $('#nameMsg');
	var nameError = "That's not a valid name"
	var nameFilter = /^[a-zA-ZàáâäãåąćęèéêëìíîïłńòóôöõøùúûüÿýżźñçčšžÀÁÂÄÃÅĄĆĘÈÉÊËÌÍÎÏŁŃÒÓÔÖÕØÙÚÛÜŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/; //like that?
	
	nameField.on('blur', function(){validate(nameField, nameDiv, nameMsg, nameFilter, nameError)});
	
	});
	
function testRegEx(value, filter){
	if (filter.test(value)){
		return true;
	} else {
		return false;
		}
	}

function validate(field, parentDiv, msgId, regEx, errorMsg){
		//get input value and label field
		var value = field.val();
		var label = parentDiv.children().first();
		
		//if phone is 10 digits
		if (testRegEx(value, regEx)){
			//success message
			parentDiv.removeClass('error').addClass('success');
			msgId.text("Valid!").css('visibility', 'visible');
			label.removeClass("label-important").addClass("label-success");
		} else {
			//error message
			parentDiv.removeClass('success').addClass('error');
			msgId.text(errorMsg).css('visibility', 'visible');
			label.removeClass("label-success").addClass("label-important");
			}
		}
