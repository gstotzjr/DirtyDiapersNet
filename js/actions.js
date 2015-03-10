$(document).ready(function(){

	$('.thumbnail').on('click',function(event){
		event.preventDefault();
		$('.shadowbox').fadeToggle();
		$('body').prepend("<div style='display:none;z-index:999999;position:fixed;top:50%;left:50%;margin-left:-" + $(this).attr('data-width')/2 + "px;margin-top:-" + $(this).attr('data-height')/2 + "px;' class='shadowPicture'><img src='" + $(this).attr('data-URL') + "' /></div>");
		$('.shadowPicture').fadeToggle();
	});

	$('.shadowbox').on('click',function(){
		$('.shadowPicture').fadeToggle();
		$(this).fadeToggle();
	});

	$('.corner').on('mouseenter',function(){
		if ($(this).hasClass('plus')){
			$(this).removeClass('plus');
			$(this).addClass('plusHover');
		} else {
			$(this).removeClass('minus');
			$(this).addClass('minusHover');
		}
	});

	$('.corner').on('mouseleave',function(){
		if ($(this).hasClass('plusHover')){
			$(this).removeClass('plusHover');
			$(this).addClass('plus');
		} else {
			$(this).removeClass('minusHover');
			$(this).addClass('minus');
		}
	});

	$('.corner').on('click',function(){
		if ($(this).hasClass('plusHover')){
			$(this).removeClass('plusHover');
			$(this).addClass('minusHover');
		} else if ($(this).hasClass('plus')){
			$(this).removeClass('plus');
			$(this).addClass('minus');
		} else if ($(this).hasClass('minusHover')){
			$(this).removeClass('minusHover');
			$(this).addClass('plusHover');
		} else {
			$(this).removeClass('minus');
			$(this).addClass('plus');
		}
		$(this).closest('section').find('form').slideToggle();
	});

});