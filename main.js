

$(document).ready(function () {
	
	$('.btn').mouseenter(function (event) {
		//event.preventDefault();
		$(this).css('background-color', 'black');
		$(this).css('color', 'aqua');
	}).mouseleave(function (event) {
		//event.preventDefault();
		$(this).css('background-color', 'aqua');
		$(this).css('color', 'black');
	});
	
	$('button').on('click', function (event) {
		//event.preventDefault();
		//$(this).css('border', 'none');
		//console.log($(this));
		
		$('#drawing').hide(1500);
		
		if (this.id == 'reel') {
			//alert('yay');
			$('#reelSummon').removeClass('hidden');
			/*case #reel:
				$('#reelSummon').show();
				break;
			case #contact:
				alert('put form here');
				break;
			case #links:
				alert('put links and icons here');
				break;
			case #pics:
				alert('put headshots here');
				break;
			default:
				break;*/
				
		}

	});
	
	
	
});