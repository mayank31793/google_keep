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
});

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

$(document).ready(function(){
	$('.heading').hide();
	$('.last_div').hide();
});

$(document).on('click','.notes',function(){
	$('.input').focus();
});	

$(document).one('keydown','.input',function(){
	$('.heading').show();
	$('.last_div').show();	
});

$(document).one('click','.input',function(){
	$('.heading').show();
	$('.last_div').show();	
});

$(document).on('click','.done',function(){
	if($('.input').html()!=""){
		$('.store_div').append("<div class='storing_div'>"+$('.input').html()+"</div>");
		$('.input').html("");	
	}
});

$(document).on('click','.done',function(){
	$('.input').focus();
});

$(document).on('focusout','.div_notes',function(){
	if($('.input').html()!=""){
		$('.store_div').append("<div class='storing_div'>"+$('.input').html()+"</div>");
		$('.input').html("");	
	}	
})

$(document).on('focusout','.div_notes',function(){
	$('.input').focus();
});

$(function(){
	$('.storing_div').draggable();
});