$(function() {
	$('.seat').on('click', function(){
		$(this).toggleClass("pending");
	});

	$('button').on('click', function(){
		$(".pending").addClass("reserved");
	});

});