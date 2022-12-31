// Object - DOM Elements
let inputs = {
	firstname: {
		id: "#first",
		type: "name",
		length: {
			min: 2,
			max: 32,
		},
		validRegex: /^[a-zà-ú ,.'-]+$/i,
		error: true,
	},
	lastname: {
		id: "#last",
		type: "name",
		length: {
			min: 2,
			max: 32,
		},
		validRegex: /^[a-zà-ú ,.'-]+$/i,
		error: true,
	},
	email: {
		id: "#email",
		type: "email",
		length: {
			min: 4,
			max: 128,
		},
		validRegex: /^\S+@\S+\.\S+$/,
		error: true,
	},
	birthdate: {
		id: "#birthdate",
		type: "date",
		validRegex: /^[1-2]{1}\d{3}[\-]\d{2}[\-]\d{2}$/,
		error: true,
	},
	quantity: {
		id: "#quantity",
		type: "number",
		value: {
			min: 0,
			max: 99,
		},
		validRegex: /^\d+$/,
		error: true,
	},
	city: {
		class: ".cityRadio",
		type: "radios",
		error: true,
	},
	termOfUse: {
		id: "#checkbox1",
		type: "checkbox",
		error: true,
	},
};

/**
 *
 * @returns bool
 */
function validateInputs() {
	let errors = [];

	// Testing all object (inputs) elements
	Object.keys(inputs).forEach((key) => {
		let el = inputs[key];

		// if element got an id
		if (el.id) {
			var elDOM = document.querySelector(inputs[key].id);

			// check if input match regex
			if (checkRegex(elDOM, el.validRegex)) {
				// names and email inputs
				if (el.type == "name" || el.type == "email") {
					// check input length
					if (elDOM.value.length >= el.length.min && elDOM.value.length <= el.length.max) {
						elDOM.parentElement.dataset.errorVisible = "false";
						el.error = false;
					}
				}

				// number inputs
				if (el.type == "number") {
					// check input value
					if (parseInt(elDOM.value) >= el.value.min && parseInt(elDOM.value) <= el.value.max) {
						elDOM.parentElement.dataset.errorVisible = "false";
						el.error = false;
					}
				}

				// no error(s), no message
				elDOM.parentElement.dataset.errorVisible = "false";
				el.error = false;
			} else {
				// error(s), display message
				elDOM.parentElement.dataset.errorVisible = "true";
				el.error = true;
			}

			// checkbox inputs
			if (el.type == "checkbox") {
				// check if term of use is checked
				if (elDOM.checked) {
					// no error(s), no message
					elDOM.parentElement.dataset.errorVisible = "false";
					el.error = false;
				} else {
					// error(s), display message
					elDOM.parentElement.dataset.errorVisible = "true";
					el.error = true;
				}
			}
		}

		// if elements got a class
		if (el.class) {
			var elsDOM = document.querySelectorAll(inputs[key].class);

			// radios inputs
			if (el.type == "radios") {
				let isOnecityRadioChecked = Array.prototype.slice.call(elsDOM).some((radio) => radio.checked);

				// check if at least one radio button is selected
				if (isOnecityRadioChecked) {
					elsDOM.forEach((radio) => {
						// no error(s), no message
						radio.parentElement.dataset.errorVisible = "false";
						el.error = false;
					});
				} else {
					elsDOM.forEach((radio) => {
						// error(s), display message
						radio.parentElement.dataset.errorVisible = "true";
						el.error = true;
					});
				}
			}
		}

		// add errors bool in array
		errors.push(!el.error);
	});
	// return true if all array values are "true"
	return errors.every(Boolean);
}

// check if regex of the input match
function checkRegex(elDOM, validRegex) {
	return elDOM.value.match(validRegex);
}

// modals DOM elements
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");

// validate form
function validate(e) {
	e.preventDefault();

	// modify modal view
	if (validateInputs()) {
		modal1.classList.toggle("show");
		modal2.classList.toggle("show");
	}
}
