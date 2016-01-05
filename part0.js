
function download(img) {

	var link = document.createElement("a");
	
	link.href = img.src;
	
	link.download = true;
	
	link.style.display = "none";
	
	var evt = new MouseEvent("click", {
	
		"view": window,
		
		"bubbles": true,
		
		"cancelable": true
		
	});
	
	document.body.appendChild(link);
	
	link.dispatchEvent(evt);
	
	document.body.removeChild(link);
	
	console.log("Downloading...");
	
}
