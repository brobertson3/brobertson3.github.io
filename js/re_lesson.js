$(document).ready(function () {

	$('#myCarousel').bind('slid.bs.carousel', function (e)
        {
          console.log("binded");
            var $this = $(this);

            $this.children('.carousel-control').show();
            /* You reached the last slide */
            if ($('.carousel-inner .item:last').hasClass('active'))
            {
            	$('#myCarousel').carousel('pause');
            	$('.glyphicon-chevron-right').click(function () {
            		console.log("Clicked on the last page");
            		/* update local variable to complete */
            		if(typeof(Storage) !== "undefined") {
    					// Code for localStorage/sessionStorage.
    					// Store
    					var path = window.location.pathname;
						var page = path.split("/").pop();
						if(page == "recycle.html") {
							localStorage.setItem("recycle.html", "true");
						} else if (page == "reuse.html") {
							localStorage.setItem("reuse.html", "true");
						} else if (page == "reduce.html") {
							localStorage.setItem("reduce.html", "true");
						}
						
					} else {
    					// Sorry! No Web Storage support..
					}
            		/* Direct to the congrats page */
            		window.location.href = "congrats.html";
            	});
                // $this.children('.right.carousel-control').hide();

            } /* First slide */ 
            else if ($('.carousel-inner .item:first').hasClass('active'))
            {
                $this.children('.left.carousel-control').hide();
            }
        });
	
	$('#home_button').click(function () {
		window.location.href = "index.html";
	});

});