$(document).ready(function () {
	
	/* Makes the bottle draggable */
	$('#draggable_bottle').draggable({
		containment: 'div.container-fluid', //contain in this container so won't mess up ui
		cursor: 'move'
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

	// /* Function to be called when the element is dropped. */
	// document.drop = function (event) {
	// 	event.preventDefault();
	// 	/* Make sure it's the bottle dropping in case other elements can later on */
 //    	var data = event.dataTransfer.getData("text");
 //    	console.log("You're going to the reduce page");

	// }

	//  Prevent the default action and allow the image to be dropped on 
	//    another element. 
	// document.allowDrop = function (event) {
	// 	event.preventDefault();
	// }

	// /* Function when the element is dragged. */
	// document.drag = function (event) {
	// 	event.dataTransfer.setData("text", event.target.id);
	// 	console.log("" + event.target.id);
	// }
});