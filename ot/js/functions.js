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

// working on the sign-up
const create_username = document.getElementById("username_id");
const create_password = document.getElementById("password_id");
const enter_enter_another = document.getElementById("enter_enter_another");

enter_enter_another.addEventListener("submit", function (e) {
	localStorage.setItem("username_value", create_username.value);
	localStorage.setItem("password_value", create_password.value);
	
	input_this.forEach(function (e) {
		e.value = "";
	})
})