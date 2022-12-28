// DOM Elements
// inputs
const firstnameInput = document.querySelector("#first");
const lastnameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const cityRadio = document.querySelectorAll(".cityRadio");
const termOfUseInput = document.querySelector("#checkbox1");

const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");

// errors block
const firstnameError = document.querySelector("#firstError");
const lastnameError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const birthdateError = document.querySelector("#birthdateError");
const quantityError = document.querySelector("#quantityError");
const cityRadioError = document.querySelector("#cityRadioError");
const termOfUseError = document.querySelector("#termOfUseError");

// validate form
function validate(e) {
	e.preventDefault();
	validateFirstname();
	validateLastname();
	validateEmail();
	validateBirthdate();
	validateQuantity();
	validatecityRadio();
	validateTermsOfUse();

	if (validateFirstname() && validateLastname() && validateEmail() && validateBirthdate() && validateQuantity() && validatecityRadio() && validateTermsOfUse()) {
		modal1.classList.add("hide");
		modal1.classList.remove("show");

		modal2.classList.add("show");
		modal2.classList.remove("hide");
	}
}

// validate firstname
function validateFirstname() {
	// verify is input length >= 2 and if it is not empty
	if (firstnameInput.value.length >= 2 && firstnameInput.value !== null && firstnameInput.value !== "") {
		hideError(firstnameError, firstnameInput);
		return true;
	} else {
		showError(firstnameError, firstnameInput, "Le champ Prénom a un minimum de 2 caractères / n'est pas vide.");
		return false;
	}
}

// validate lastname
function validateLastname() {
	// verify is input length >= 2 and if it is not empty
	if (lastnameInput.value.length >= 2 && lastnameInput.value !== null && lastnameInput.value !== "") {
		hideError(lastnameError, lastnameInput);
		return true;
	} else {
		showError(lastnameError, lastnameInput, "Le champ Nom a un minimum de 2 caractères / n'est pas vide.");
		return false;
	}
}

// validate email
function validateEmail() {
	// verify is input length >= 2 & if it is not empty & if email is valid
	if (emailInput.value.length >= 2 && emailInput.value !== null && emailInput.value !== "" && emailInput.value.match(/^\S+@\S+\.\S+$/)) {
		hideError(emailError, emailInput);
		return true;
	} else {
		showError(emailError, emailInput, "Le champ Email ne doit pas être vide et doit être valide. (email@example.com)");
		return false;
	}
}

// validate birthdate
function validateBirthdate() {
	// verify if input is not empty & if it is valid
	if (birthdateInput.value !== null && birthdateInput.value !== "" && birthdateInput.value.match(/^\d{4}[\-]\d{2}[\-]\d{2}$/)) {
		hideError(birthdateError, birthdateInput);
		return true;
	} else {
		showError(birthdateError, birthdateInput, "Le champ Birthdate ne doit pas être vide et la date doit être valide.");
		return false;
	}
}

// validate tournaments quantity
function validateQuantity() {
	// verify if input is not empty & if it is valid & between 0 - 99
	if (quantityInput.value !== null && quantityInput.value !== "" && quantityInput.value.match(/^\d+$/) && quantityInput.value >= 0 && quantityInput.value <= 99) {
		hideError(quantityError, quantityInput);
		return true;
	} else {
		showError(quantityError, quantityInput, "Le champ Quantity ne doit pas être vide et être compris entre 0 et 99.");
		return false;
	}
}

// validate city checkbox
function validatecityRadio() {
	// verify if at least one checkbox is checked
	let isOnecityRadioChecked = Array.prototype.slice.call(cityRadio).some((radio) => radio.checked);
	if (isOnecityRadioChecked) {
		cityRadio.forEach((radio) => hideError(cityRadioError, radio));
		return true;
	} else {
		cityRadio.forEach((radio) => showError(cityRadioError, radio, "Vous devez choisir une destination"));
		return false;
	}
}

// validate terms of use
function validateTermsOfUse() {
	if (termOfUseInput.checked) {
		hideError(termOfUseError, termOfUseInput);
		return true;
	} else {
		showError(termOfUseError, termOfUseInput, "Vous devez accepter les conditions d'utilisations");
		return false;
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
