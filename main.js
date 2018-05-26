//build button flag to be able to return to home screen
//once a button is clicked, the flag must allow the others to work

$(document).ready(function () {
	
	//css for the buttons upon mouse enter
	/*$('.btn').mouseenter(function (event) {
		//event.preventDefault();
		$(this).css('background-color', 'black');
		$(this).css('color', 'aqua');
	}).mouseleave(function (event) {
		//event.preventDefault();
		$(this).css('background-color', 'aqua');
		$(this).css('color', 'black');
	});*/
	
	$('button').on('click', function (event) {
		//event.preventDefault();
		//$(this).css('border', 'none');
		//console.log($(this));
		
		$('#drawing').hide(1500);
		
		//respond to clicked button with appropriate deistination
		if (this.id == 'reel') {
			$('#reelSummon').removeClass('hidden');
		} else if (this.id == 'contact') {
			$('#contactSummon').removeClass('hidden');
		} else if (this.id == 'links') {
			$('#linksSummon').removeClass('hidden');
		} else if (this.id == 'pics') {
			$('#picsSummon').removeClass('hidden');
		}

	});
	
	
	
});