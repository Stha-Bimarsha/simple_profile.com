// function_if_correct_this
function if_correct_this () {
	document.body.innerHTML = "";
	// creating the elements
	const form_this = document.createElement("form");
	const input_this_here = document.createElement("input");
	const button_this = document.createElement("button");
	
	// adding content to elements
	input_this_here.classList.add("input_this");
	input_this_here.setAttribute("placeholder", "Enter here :: google search ");
	button_this.classList.add("button_this");
	button_this.innerText = "Enter";
	
	// pasting the elements
	document.body.append(form_this);
	form_this.append(input_this_here);
	form_this.append(button_this);
	
	// adding functionality to the form_this element
	form_this.addEventListener("submit", function (e) {
		e.preventDefault();
		location.href = `https://www.google.com/search?q=${input_this_here.value}`;
		console.log(input_this.value);
		input_this.value = "";
	})
}


// getting the username and password value from localStorage
const username_value_here = localStorage.getItem("username_value");
const password_value_here = localStorage.getItem("password_value");

// 
const username_input = document.getElementById("username_this");
const password_input = document.getElementById("password_this");
const enter_enter = document.getElementById("enter_enter");

enter_enter.addEventListener("submit", function (e) {
	e.preventDefault();
	if (username_input.value == username_value_here && password_input.value == password_value_here) {
		if_correct_this();
	}
	else if (username_input.value === "username_this" && password_input.value === "password_this") {
		location.href = `./ot/temp.html`;
	}
	else {
		document.write("Invalid Input, the username or password that you have entered is incorrect \n");
	}
	username_input.value = "";
	password_input.value = "";
})



// for the labels
const label_this = document.querySelectorAll("label");
console.log(label_this);
// label_this.forEach(function (e) {
	// e.classList.add("glow_this");
// })
function ref_this_one () {
	label_this.forEach(function (e) {
		e.classList.add("glow_this");
	})
}
setTimeout(ref_this_one, 2000);

// selecting input_this class
const input_this = document.querySelectorAll("input_this");
