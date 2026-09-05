// Get the button
let mybutton = document.getElementById("myBtn");

// Setup function to control button scroll
window.onscroll = function() {scrollFunction()};

//When end user scrolls down 400px from top of webpage, show button
// Condition statement used to control display of button. Less than 400px hide button (display none)
function scrollFunction() {
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// when user clicks-- function-- bring to top of webpage
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0; // value for restart position
}
