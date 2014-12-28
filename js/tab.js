jQuery(document).ready(function($){
	var tabItems = $('.tab-nav a'),
		tabContentWrapper = $('.tab-content');

	tabItems.on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if( !selectedItem.hasClass('selected') ) {
			var selectedTab = selectedItem.data('content'),
				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
				slectedContentHeight = selectedContent.innerHeight();
			
			tabItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected').siblings('li').removeClass('selected');
			//animate tabContentWrapper height when content changes 
			tabContentWrapper.animate({
				'height': slectedContentHeight
			}, 200);
		}
	});

	//hide the .tabs::after element when tabbed navigation has scrolled to the end (mobile version)
	checkScrolling($('.tabs nav'));
	$(window).on('resize', function(){
		checkScrolling($('.tabs nav'));
		tabContentWrapper.css('height', 'auto');
	});
	$('.tabs nav').on('scroll', function(){ 
		checkScrolling($(this));
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.tab-nav').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.tabs').addClass('is-ended');
		} else {
			tabs.parent('.tabs').removeClass('is-ended');
		}
	}
});