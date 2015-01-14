
$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '65%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});


});

