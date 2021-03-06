$(document).ready(function () {
	
	/* Check if the lessons are completed */
	// Retrieve
	if (localStorage.getItem("recycle.html") == "true") {
		console.log("Recycle done");
	} if (localStorage.getItem("reduce.html") == "true") {
		console.log("Reduce done");
	} if (localStorage.getItem("reuse.html") == "true") {
		console.log("Reuse done");
	}

	/* Need to initialize all popovers here */
  	$(function () {
 		$('[data-toggle="popover"]').popover();
	});
	

	/* Makes the bottle draggable */
	$('#draggable_bottle').draggable({
		containment: 'div.interaction_container', //contain in this container so won't mess up ui
		cursor: 'move',
		stack: '#draggable_bottle'
	}); // going to snap to middle later http://stackoverflow.com/questions/11388679/how-do-i-force-jquery-to-center-an-element-when-it-is-dragged-to-and-snapped-to

	//Might use a draggable helper as well later

	$('#reduce, #reuse, #recycle').droppable({
		drop: handleDrop
	});

	function handleDrop (event, ui) {
		/* Find the id of the item */
		var item = $(this).attr('id');
		/* redirect to the new page based on the image it was dragged to */
		window.location.href = '' + item + ".html";
	}
});