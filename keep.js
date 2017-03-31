$(document).ready(function(){
	$('.notes_display').hide();
	$('.remainder_display').hide();
	$('.label_display').hide();
	$('.archive_display').hide();
	$('.trash_display').hide();
	$('.setting_display').hide();
	$('.feedback_display').hide();
	$('.help_display').hide();
	$('.app_display').hide();
	$('.key_display').hide();
	$('.checkbox_div').hide();
	$('.append_div').hide();
	$('.heading').hide();
	$('.last_div').hide();
});

function callingDone(){
	if($('.input').html()!=""){
		$('.store_div').append("<div class='storing_div' contenteditable='false'>"+$('.input').html()+"<span class='delete_div'>"+"*"+"</span></div>");
		$('.input').html("");
		$('.input').focus();	
	}	
}

function focusoutInput(){
	if($('.input').html()!=""){
		$('.store_div').append("<div class='storing_div'>"+$('.input').html()+"<div class='star'>*</div></div>");
		$('.input').html("");	
		if(($('.storing_div').length+1)%3==1){
			$('.store_div').append("<br>");
		}
	}	
}

function createCheckbox(){
	$('.span_type').hide();
	$('.input').append("<div contenteditable='true' class='main_div'><input type='checkbox' class='checkbox_type'><span contenteditable='false' class='span_type'>+</span></div>");
	$('.input').find('.main_div').focus();	
}

function popup_done_button(){
	$('.model').css("display","none");
	$('.model_content').css("display","none");
	$('.close').css("display","none");
	if(($('.storing_div').length+1)%3==1){
		$('.store_div').append("<br>");
	}	
	if($('.storing_div').html()!=$('.model_content').html()){
		$('.store_div').append("<div class='storing_div'>"+$('.model_content_div').html()+"</div>");
	}	
}

function append_div_click(){
	$('.append_div').hide();
	$('.input').append("<div contenteditable='true' class='main_div'><input type='checkbox' class='checkbox_type'><span contenteditable='false' class='span_type'>+</span></div>");
	$(this).closest('.main_div').focus();	
}

function checkbox_type_click(check){
	if($('.checkbox_type').is(':checked')){
		$(check).closest('.main_div').css({"opacity":"0.5"});
	}
	if(!$('.checkbox_type').is(':checked')){
		$(check).closest('.main_div').css({"opacity":"1"});
	}
	// if($('.checkbox_type').is(':checked')){
	// 	$(this).closest('.main_div').css({"opacity":"0.5"});
	// }
	// if(!$('.checkbox_type').is(':checked')){
	// 	$(this).closest('.main_div').css({"opacity":"1"});
	// }	
}

function storing_div_dblclick(dblclk){
	var x = $(dblclk).html();
	$(dblclk).remove();
	$('.model_content_div').html(x);
	$('.model').css("display","block");
	$('.model_content').css("display","block");
	$('.close').css("display","block");
	$('.model_content').append('<div class="popup_done" contenteditable="false">DONE</div>');
	$('.model_content').append('<div class="close">✖</div>');	
}

function close_click(){
	$('.model').css("display","none");
	$('.model_content').css("display","none");
	$('.close').css("display","none");	
	if($('.storing_div').html()!=$('.model_content').html()){
		$('.store_div').append("<div class='storing_div'>"+$('.model_content_div').html()+"</div>");
	}	
}

$(document).on('click','.tab_common',function(){
	for(var i=0;i<$('.tab_common').length;i++){
		$('.tab_common').css("background-color","#D2D4C6");
	}
	$(this).css("background-color","#AFB297");
});

$(document).on('click','.notes',function(){
	for(var i=0;i<$('.tab_display').length;i++){
		$('.tab_display').hide();
	}
	$('.notes_display').show();
});

$(document).on('click','.remainder',function(){
	for(var i=0;i<$('.tab_display').length;i++){
		$('.tab_display').hide();
	}
	$('.remainder_display').show();
});

$(document).on('click','.label',function(){
	for(var i=0;i<$('.tab_display').length;i++){
		$('.tab_display').hide();
	}
	$('.label_display').show();
});

$(document).on('click','.archive',function(){
	for(var i=0;i<$('.tab_display').length;i++){
		$('.tab_display').hide();
	}
	$('.archive_display').show();
});

$(document).on('click','.search',function(){
	$('.search').css({'background-color':'#FFFFFF','opacity':1});
});

$(document).on('click','.notes',function(){
	$('.input').focus();
});	

$(document).on('keydown','.input',function(){
	$('.heading').show();
	$('.last_div').show();	
});

$(document).on('click','.input',function(){
	$('.heading').show();
	$('.last_div').show();	
});

$(document).on('focusout','.div_notes',function(){
	$('.heading').hide();
	$('.last_div').hide();	
});

$(document).on('click','.checkbox',function(){
	$('.notes_display').append("<div class='append_div'>Checkbox</div>");
	$('.append_div').show();
});

$(document).on('click','.append_div',function(){
	$('.heading').show();
	$('.last_div').show();
	// $('.input').attr('contenteditable','false');	
});

$(document).on('click','.done',function(){
	$(".span_type:last").hide();
});

$(document).on('focusout','.div_notes',function(){
	$(".span_type:last").hide();
});

$(document).on('click','.star',function(){
	$(this).closest('.storing_div').append("<div class='delete_div'>Delete Note</div>");
});


$(document).on('click','.delete_div',function(){
	this.closest('.storing_div').remove();
});
 
$(document).on('click','.checkbox_click',function(){
	$('.done').show();
	$('.input').show();
	$('.heading').show();
});	

$("html").click(function(){
	$('.delete_div').hide();
	$('.append_div').hide();
});

$(document).on('mousedown','.storing_div',function(){
	 x = $(this).position();
	 y = $(this).offset();
	$(this).draggable();	
});

$(document).on('click','.close',function(){
	close_click();
});

$(document).on('dblclick','.storing_div',function(){
	storing_div_dblclick(this);
});

$(document).on('click','.popup_done',function(){
	popup_done_button();
});

$(document).on('click','.checkbox_type',function(){
	checkbox_type_click(this);
});

$(document).on('click','.span_type',function(){
	createCheckbox();
	// $(".span_type:last").hide();
});

$(document).on('focusout','.div_notes',function(){
	focusoutInput();
});

$(document).on('click','.append_div',function(){
	append_div_click();
});

$(document).on('click','.done',function(){
	callingDone();
});