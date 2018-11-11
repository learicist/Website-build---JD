const buttons = {
	'reelBtn': $('#reelSummon'),
	'picsBtn': $('#picsSummon'),
	'linksBtn': $('#linksSummon'),
	'contactBtn': $('#contactSummon'),
	'resBtn': $('#resSummon')
}

$(document).ready(function () {
	console.log('Hello Jenna');
	
	$('#title').on({
		'click': function () {
			location.reload();
		}
	});
	
	$('.main').on({
		'mouseenter': function () { 
			$(this).css('color', 'white')
		},
		
		'click': function () {
			//set background to black
			$('body').css('background', 'black');
			
			//reposition name div 
			$('#jenna')
				.prependTo('#topRow')
				.css({'padding-left': '15px', 'padding-top': '5px'});
			
			//change name to white
			$('#title').css({
				'color': 'white',
				'font-size': '1.15em',
				'font-weight': '400',
				'letter-spacing': '0',
				'opacity': '0.9'
			});
			
			//stop video if user leaves screen
			if (!buttons.reelBtn.hasClass('hidden')) {
				let temp = $('#reel').attr('src'); 
				$('#reel').attr('src', temp);
			}
			
			//display chosen page and hide others
			for (let i in buttons) {
				if (buttons[i] !== buttons[this.id]) {
					buttons[i].addClass('hidden');
				}			
			}
			buttons[this.id].removeClass('hidden');
			//console.log(this.id);
		}
	});	
	
});