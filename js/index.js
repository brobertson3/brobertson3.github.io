$(document).ready(function () {
	
	/* Function to be called when the element is dropped. */
	document.drop = function (event) {
		event.preventDefault();
		/* Make sure it's the bottle dropping in case other elements can later on */
    	var data = event.dataTransfer.getData("text");
    	console.log("You're going to the reduce page");

	}

	/* Prevent the default action and allow the image to be dropped on 
	   another element. */
	document.allowDrop = function (event) {
		event.preventDefault();
	}

	/* Function when the element is dragged. */
	document.drag = function (event) {
		event.dataTransfer.setData("text", event.target.id);
		console.log("" + event.target.id);
	}
});