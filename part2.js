
function doit() {

	var imgs = document.querySelectorAll("img");
	
	downloadAll(imgs, "jpg", -1);
	
}

function addDownloadBtn() {

	var btn = document.createElement("button");
	
	btn.innerText = "Download all images";
	
	btn.addEventListener("click", doit);
	
	btn.style.position = "fixed";
	
	btn.style.top = btn.style.left = "0px";
	
	document.body.appendChild(btn);
	
}

addDownloadBtn();
