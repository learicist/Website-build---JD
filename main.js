const buttons = {
	'reelBtn': $('#reelSummon'),
	'picsBtn': $('#picsSummon'),
	'linksBtn': $('#linksSummon'),
	'contactBtn': $('#contactSummon'),
	'drawing': $('#drawingSummon')
}

$(document).ready(function () {
	console.log('Hello Jenna');
	
	$('#title').on({
		'click': function () {
			location.reload();
		}
	});
	
	$('.main').on({
		'click': function () {
			//stop video if user leaves screen
			if (!buttons.reelBtn.hasClass('hidden')) {
				let temp = $('#reel').attr('src'); 
				$('#reel').attr('src', temp);
			}
			
			for (let i in buttons) {
				if (buttons[i] !== buttons[this.id]) {
					buttons[i].addClass('hidden');
				}			
			}
			buttons[this.id].removeClass('hidden');
			console.log(this.id);
		}
	});	
	
});