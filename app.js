$('.seat').on('click', function(){
	$(this).toggleClass("pending");
});

$('button').on('click', function(){
	var firstname = $('#firstname').val();
	$(".pending").addClass("reserved"); 
	$("#Thankyou").text("Thankyou for your reservation " + firstname);
});