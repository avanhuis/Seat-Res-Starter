$('.seat').on('click', function(){
	$(this).toggleClass("pending");
});

$('button').on('click', function(){

	$(".pending").setClass("reserved");
});