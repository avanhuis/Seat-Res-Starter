$(function() {

	function seatChart(elm, rows, cols) {
		for(i = 0; i < rows; i++) {
			elm.append("<div class='seat-chart'></div>");
			for(j = 0; j <cols; j++) {
				elm.append("<div class='seat'></div>");
			};
		};

	};

	seatChart($(".seat-chart"), 4, 6);

	$('.seat').on('click', function(){
		$(this).toggleClass("pending");
	 });

	$('button').on('click', function(){
		var firstname = $('#firstname').val();
		$(".pending").addClass("reserved"); 
		$("#Thankyou").text("Thankyou for your reservation " + firstname);
	});
});