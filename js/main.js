
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


	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//open popup
            $('.popup-trigger').on('click', function(event){
                event.preventDefault();
                $('.popup').addClass('is-visible');
            });
            
            //close popup
            $('.popup').on('click', function(event){
                if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
                    event.preventDefault();
                    $(this).removeClass('is-visible');
                }
            });
            //close popup when clicking the esc keyboard button
            $(document).keyup(function(event){
                if(event.which=='27'){
                    $('.popup').removeClass('is-visible');
                }
            });


});

