// DOM Elements
const firstnameInput = document.querySelector("#first");
const lastnameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");

const firstnameError = document.querySelector("#firstError");
const lastnameError = document.querySelector("#lastError");

// validate form
function validate() {
	validateFirstname();
	validateLastname();
}

// validate firstname
function validateFirstname() {
	if (firstnameInput.value.length >= 2 && firstnameInput.value !== null && firstnameInput.value !== "") {
		hideError(firstnameError, firstnameInput);
	} else {
		showError(firstnameError, firstnameInput, "Le champ Prénom a un minimum de 2 caractères / n'est pas vide.");
	}
}

// validate lastname
function validateLastname() {
	if (lastnameInput.value.length >= 2 && lastnameInput.value !== null && lastnameInput.value !== "") {
		hideError(lastnameError, lastnameInput);
	} else {
		showError(lastnameError, lastnameInput, "Le champ Nom a un minimum de 2 caractères / n'est pas vide.");
	}
}

// errors hide
function hideError(error, input) {
	error.classList.remove("show");
	input.classList.remove("red");
	input.classList.add("green");
}

// errors display
function showError(error, input, message) {
	error.classList.add("show");
	error.innerText = message;
	input.classList.add("red");
	input.classList.remove("green");
}
