const buttons = {
	'reelBtn': $('#reelSummon'),
	'picsBtn': $('#picsSummon'),
	'linksBtn': $('#linksSummon'),
	'contactBtn': $('#contactSummon'),
	'drawing': $('#drawingSummon')
}


$(document).ready(function () {
	console.log('Hello Jenna');
	//css for the buttons upon mouse enter
	/*$('.main').mouseenter(function (event) {
		//event.preventDefault();
		$(this).css('background-color', 'black');
		$(this).css('color', 'aqua');
	}).mouseleave(function (event) {
		//event.preventDefault();
		$(this).css('background-color', 'aqua');
		$(this).css('color', 'black');
	});*/
	
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
				'background-color': '#c2c1c9',
				'color': '#000'
			});
		},
		'mouseleave': function () {
			$(this).css({
				'background-color': '#5a5866',
				'color': '#f9f9fa'
			});
		},
		'click': function () {
			for (let i in buttons) {
				if (buttons[i] !== buttons[this.id]) {
					buttons[i].addClass('hidden');
				}			
			}
			buttons[this.id].removeClass('hidden');
			//buttons[this.id].removeClass('hidden');
			//buttons[userArray[userArray.length - 1]].addClass('hidden');*/
			console.log(this.id);
		}
	});
	
	/* .on('click', "#pics", function () {
		
		$('#drawing').hide(1500);
		$('#picsSummon').removeClass('hidden');
		
	});*/
	
	
});