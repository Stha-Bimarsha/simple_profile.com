const glow_this = document.querySelectorAll(".glow_this");
let tracker = 0;

glow_this.forEach(function (e) {
	setInterval (function () {
		if (tracker == 1) {
			e.style.color = "grey";
			tracker = 0;
		}
		console.log("The value of tracker is " + tracker);
	}, 5000);
	
})