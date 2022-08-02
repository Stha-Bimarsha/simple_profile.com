const glow_this = document.querySelectorAll(".glow_this");
let tracker = 0;

glow_this.forEach(function (value_this) {
	value_this.style.color = "white";
})

// array of pictures
const back_img = ["one", "two", "three", "four"];
// selecting the div with picture background 
const second_container = document.getElementById("second_container");
let i = 1;
setInterval(function () {
	if (i >= back_img.length) {
		i = 0;
	}
	second_container.style.backgroundImage = `url("./img/${back_img[i]}.jpg")`;
	i++;
}, 25000);
