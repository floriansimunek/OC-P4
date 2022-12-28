// DOM Elements
const firstnameInput = document.querySelector("#first");
const lastnameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");

const firstnameError = document.querySelector("#firstError");
const lastnameError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const birthdateError = document.querySelector("#birthdateError");
const quantityError = document.querySelector("#quantityError");

// validate form
function validate() {
	validateFirstname();
	validateLastname();
	validateEmail();
	validateBirthdate();
	validateQuantity();
	return false;
}

// validate firstname
function validateFirstname() {
	// verify is input length >= 2 and if it is not empty
	if (firstnameInput.value.length >= 2 && firstnameInput.value !== null && firstnameInput.value !== "") {
		hideError(firstnameError, firstnameInput);
	} else {
		showError(firstnameError, firstnameInput, "Le champ Prénom a un minimum de 2 caractères / n'est pas vide.");
	}
}

// validate lastname
function validateLastname() {
	// verify is input length >= 2 and if it is not empty
	if (lastnameInput.value.length >= 2 && lastnameInput.value !== null && lastnameInput.value !== "") {
		hideError(lastnameError, lastnameInput);
	} else {
		showError(lastnameError, lastnameInput, "Le champ Nom a un minimum de 2 caractères / n'est pas vide.");
	}
}

// validate email
function validateEmail() {
	// verify is input length >= 2 & if it is not empty & if email is valid
	if (emailInput.value.length >= 2 && emailInput.value !== null && emailInput.value !== "" && emailInput.value.match(/^\S+@\S+\.\S+$/)) {
		hideError(emailError, emailInput);
	} else {
		showError(emailError, emailInput, "Le champ Email ne doit pas être vide et doit être valide. (email@example.com)");
	}
}

// validate birthdate
function validateBirthdate() {
	// verify if input is not empty & if it is valid
	if (birthdateInput.value !== null && birthdateInput.value !== "" && birthdateInput.value.match(/^\d{4}[\-]\d{2}[\-]\d{2}$/)) {
		hideError(birthdateError, birthdateInput);
	} else {
		showError(birthdateError, birthdateInput, "Le champ Birthdate ne doit pas être vide et la date doit être valide.");
	}
}

// validate tournaments quantity
function validateQuantity() {
	// verify if input is not empty & if it is valid & between 0 - 99
	if (quantityInput.value !== null && quantityInput.value !== "" && quantityInput.value.match(/^\d+$/) && quantityInput.value >= 0 && quantityInput.value <= 99) {
		hideError(quantityError, quantityInput);
	} else {
		showError(quantityError, quantityInput, "Le champ Quantity ne doit pas être vide et être compris entre 0 et 99.");
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
