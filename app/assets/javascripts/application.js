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

/*
 <div class="control-group">
	<%= f.label :phone, :class => "label label-important" %><br>
	<div class="controls">
		<%= f.text_field :phone, :class => "input-xlarge", :id => "inputError" %>
		<span class="help-inline">Woops! Please write a 10-digit phone number</span>
  </div>
</div> 
 */
$(document).ready(function(){
	
	
	//phone validation
	$('.help-inline').css('visibility', 'hidden');
	var phoneField = $('#phoneField');
	
	phoneField.on('blur', function(){
		var input = phoneField.val();
		var phoneDiv = $('#phoneContain');
		var label = phoneDiv.children().first();
		
		if (validatePhone(input)){
			$('#phoneMsg').text("Valid!").css('visibility', 'visible');
			label.removeClass("label-important").addClass("label-success");
			phoneDiv.removeClass('error').addClass('success');
			
			
		} else {
			phoneDiv.removeClass('success').addClass('error');
			$('#phoneMsg').text("Woops! Please write a 10-digit phone number").css('visibility', 'visible');
			label.addClass("label-important");
			}
		});
	
	});
	
function validateName(name){
	
	}

function validatePhone(phoneField){
	var value = phoneField;
	$.trim(value);
	var filter = /^[0-9]{10}$/;
	
	if (filter.test(value)){
		return true;
	} else {
		return false;
		}	
	}
	
function validateId(id){
	
	}
