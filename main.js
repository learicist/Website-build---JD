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
	
	$('#navbar').on('click', "button", function () {
		
		let buttons = {
			'reel': $('#reelSummon'),
			'pics': $('#picsSummon'),
			'links': $('#linksSummon'),
			'contact': $('#contactSummon')
		}
		
		$('#drawing').hide(1500);
		let selector = '$("#' + this.id + 'Summon")';        //`$('#${this.id}Summon')`;
		//console.log(selector);
		buttons[this.id].removeClass('hidden');
		
		
		
	});
	
	/* .on('click', "#pics", function () {
		
		$('#drawing').hide(1500);
		$('#picsSummon').removeClass('hidden');
		
	});*/
		
		
		//respond to clicked button with appropriate deistination
	
		
		/*if (this.id == 'reel') {
			
		} else if (this.id == 'contact') {
			$('#contactSummon').removeClass('hidden');
		} else if (this.id == 'links') {
			$('#linksSummon').removeClass('hidden');
		} else if (this.id == 'pics') {
			$('#picsSummon').removeClass('hidden');
		}*/

	
	
	
	
});