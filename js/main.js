
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


	//open interest point description
	$('.single-point').children('a').on('click', function(){
		var selectedPoint = $(this).parent('li');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.single-point.is-open').removeClass('is-open').addClass('visited');
		}
	});
	//close interest point description
	$('.cd-close-info').on('click', function(event){
		event.preventDefault();
		$(this).parents('.single-point').eq(0).removeClass('is-open').addClass('visited');
	});






});

