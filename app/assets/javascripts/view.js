function toggleElementVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.visibility == "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}

function toggleElementsVisibility(ids) {
	for (var i = 0; i < ids.length; i++) {
		toggleElementVisibility(ids[i]);
	}
}

function toggleElementDisplay(id) {
    var element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleElementsDisplay(ids) {
    for (var i = 0; i < ids.length; i++) {
		toggleElementDisplay(ids[i]);
	}
}

function toggleElementDisplayInlineBlock(id) {
    var element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "inline-block";
    } else {
        element.style.display = "none";
    }
}

function toggleElementsDisplayInlineBlock(ids) {
	for (var i = 0; i < ids.length; i++) {
		toggleElementsDisplayInlineBlock(ids[i]);
	}	
}