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
	
	let userArray = [];
	
	$('#mainBtns').on('click', "button", function () {
		
		let buttons = {
			'reel': $('#reelSummon'),
			'pics': $('#picsSummon'),
			'links': $('#linksSummon'),
			'contact': $('#contactSummon')
		}
		
		if (userArray.length == 0) {
			$('#drawing').hide(1500);
		}
		
		buttons[this.id].removeClass('hidden');
		userArray.push(this.id);
		//LAST ITEM IN userArray needs to be reassgined the class of hidden
		
		//let selector = '$("#' + this.id + 'Summon")';        //`$('#${this.id}Summon')`;
		//console.log(selector);
		
		//MAKE CONDITION FOR if the button clicked isn't the page you're already on
			
		//buttons[this.id].removeClass('hidden');
		//buttons[userArray[userArray.length - 1]].addClass('hidden');
			
		
		console.log(userArray);
		
		
		
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