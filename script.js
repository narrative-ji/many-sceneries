$(document).ready(function() {
    console.log("ready!");

    $('a#mute').click(function(event){
		event.preventDefault();
		console.log('a clicked;')

		$( "section.placeholder video" ).each(function( index ) {
			// console.log('video - '+ $(this).attr('id') + 'muted ??? ' + $(this).prop('muted'))
			if ( $( this ).prop('muted') === true ) {
				$( this ).prop('muted', false) 
			} else {
				$( this ).prop('muted', true) 
			}
		});

		$( this ).toggleClass('off');

		// if ( $( this).hasClass('off') ) {

		// } else {
		// 	$( this ).addClass('off');
		// }

	});

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	  // true for mobile device
	  console.log('Mobile!');

	  $(".item").click(

	        // function to run on click in	
	        function() {
	            // find target video id via .item data-target-id attribute, set it as videoId
	            var videoId = $(this).attr('data-target-id');

	            // find target video via videoId variable
	            var targetVideo = $("section.placeholder #" + videoId);

	            // play video 
	            targetVideo.trigger('play');
	            // targetVideo.prop('muted', true);
	            // change opacity to 1
	            targetVideo.addClass('playing');



	            $( "section.placeholder video" ).each(function( index ) {
				  $( this ).removeClass('top');
				});

	            targetVideo.addClass('top');

	        }
	    );

	} else {
		// false for not mobile device
		console.log('Desktop!');

		
	    
	    $(".item").hover(

	        // function to run on hover in	
	        function() {
	            // find target video id via .item data-target-id attribute, set it as videoId
	            var videoId = $(this).attr('data-target-id');

	            // find target video via videoId variable
	            var targetVideo = $("section.placeholder #" + videoId);

	            // play video 
	            targetVideo.trigger('play');
	            // targetVideo.prop('muted', true);
	            // change opacity to 1
	            targetVideo.addClass('playing');



	            $( "section.placeholder video" ).each(function( index ) {
				  $( this ).removeClass('top');
				});

	            targetVideo.addClass('top');

	        },


	        // function to run on hover out
	        function() {

	            //find target video id via .item data-target-if attribute, set it as videoID
	            var videoID = $(this).attr('data-target-id');

	            var targetVideo = $("section.placeholder #" + videoID);

	            // targetVideo.removeClass('playing');
	            targetVideo.trigger('pause');

	            // targetVideo.removeClass('top');

	        }
	    );
	}


});