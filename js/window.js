function setSize() {
	document.getElementById("gloss").style.width = window.innerWidth;
	document.getElementById("gloss").style.height = window.innerHeight;
}

document.getElementById("gloss").addEventListener("resize", setSize());

document.getElementById("play").addEventListener("click", function(){
	document.getElementById("gloss").removeEventListener("resize", setSize())

	document.getElementsByClassName("vertical")[0].style.display = "none";
	document.getElementsByClassName("vertical")[1].style.display = "none";

	document.getElementById("gloss").className = "scrollup";
});