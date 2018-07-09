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
		'mouseenter': function () {
			$(this).css('cursor', 'pointer');
		},
		'click': function () {
			location.reload();
		}
	});
	
	$('.main').on({
		'mouseenter': function () {
			$(this).css({
				'background-color': '#4b4a55',
				'color': '#ebeaed'
			});
		},
		'mouseleave': function () {
			$(this).css({
				'background-color': '#ebeaed',
				'color': '#4b4a55'
			});
		},
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