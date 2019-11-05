let imagesList = ["fayza.jpg", "logo.jpeg", "Hueyfreeman-jpg.png"];
let current = 0;

document.addEventListener('DOMContentLoaded', event=>{
	myFunction();
})

function myFunction() {
	console.log(current);
	document.getElementById("image").setAttribute("src", imagesList[current]);
	if (current >= (imagesList.length - 1)) {
		current = 0;
	} else {
		current++;
	}
	setTimeout(myFunction, 3 * 1000);
}