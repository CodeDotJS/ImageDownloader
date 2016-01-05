function downloadAll(imgs, ext, limit) {

	if (ext) {
	
		ext = "." + ext;
		
		imgs = [].slice.call(imgs).filter(function(img) {
		
			var src = img.src;
			
			return (src && (src.indexOf(ext, src.length - ext.length) !== -1));
			
		});
		
	}
	
	limit = (limit && (0 <= limit) && (limit <= imgs.length)) ? limit : imgs.length;
	
	for (var i = 0; i < limit; i++) {
	
		var img = imgs[i];
		
		console.log("IMG: " + img.src + " (", img, ")");
		
		download(img);
		
	}
	
}
