$(function() {
		// Прелоадер
	$(window).on('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});

	$("a[rel='m_PageScroll2id']").mPageScroll2id({
});

	// Custom JS
	$('#my-menu').mmenu({
               "extensions": [
                  "pagedim-black",
                  "position-right",
                  "theme-dark"
               ],
               "navbars": [
                  {
                     "position": "top"
                  },
                  {
                     "position": "bottom",
                     "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                     ]
                  }
               ]
            },
           {
         // configuration
         classNames: {
            fixedElements: {
               fixed: "fix"
            }
         }});

	var api = $("#my-menu").data( "mmenu" );
	api.bind( "openPanel:start", function( $panel ) {
		$('.hamburger').addClass('is-active');
	});



	// Custom JS
	$('.carouser-header').owlCarousel({
		loop: true,
		margin:10,
		smartSpeed: 1000,    
		dots: true,
		responsive:{
			0:{
				items: 1
			}
		}
	});

	$('.carouser-works').owlCarousel({
		loop: true,
		margin:10,
		smartSpeed: 1000,    
		dots: true,
		responsive:{
			0:{
				items: 1
			}
		}
	});

	$('.carouser-review').owlCarousel({
		loop: true,
		margin:10,
		smartSpeed: 1000,    
		dots: true,
		responsive:{
			0:{
				items: 1
			}
		}
	});

	// Все что выполняется при переизменение размеров

	function onResize(){
		// Плагин EqualHeighs
		$('.s-exp .col-lg-4').equalHeights();	
		$('.s-callback .img_wrapper').equalHeights();	

		

	}	
	onResize();


	$(window).resize(function() {
		HamburgerShow();
	});

	function HamburgerShow(){
		if(window.innerWidth  < 1200){
			$('.hamburger_wrapper').addClass('show');
			$('.hamburger_wrapper').removeClass('hide');
		}		
		else{
			$('.hamburger_wrapper').addClass('hide');
			$('.hamburger_wrapper').removeClass('show');
		};		
	}
	HamburgerShow();

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$('.hamburger_wrapper').addClass('show');
			$('.hamburger_wrapper').removeClass('hide');
		}
		else{
			$('.hamburger_wrapper').addClass('hide');
			$('.hamburger_wrapper').removeClass('show');
		}
	});
	
});

