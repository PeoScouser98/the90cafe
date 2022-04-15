// get name of each field
const getFieldName = (input) => {
	return input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();
};
// get input element

// show error message
const showError = (input, message) => {
	const errorIcon = /*html */ `<i class="bi bi-x align-center"></i>`;
	const errorMessage = input.parentElement.querySelector(".error-message");
	errorMessage.innerHTML = errorIcon + message;
	errorMessage.style.color = "var(--error)";
	input.style.border = "3px solid var(--error)";
};
// show success if value of the field is valid
const showSuccess = (input, message) => {
	const successMessage = input.parentElement.querySelector(".error-message");
	successMessage.innerText = message;
	input.style.border = "3px solid var(--success)";
};

/**
 * các rule thực hiện check các trường input
 */
const isRequired = (inputArray) => {
	inputArray.forEach((input) => {
		input.oninput = () => {
			input.value.trim() != ""
				? showSuccess(input, "")
				: showError(input, `Bạn chưa nhập ${getFieldName(input)}`);
		};
	});
};
const checkNull = (inputArray) => {
	for (const input of inputArray) {
		input.value != ""
			? showSuccess(input, "")
			: showError(input, `Bạn chưa nhập ${getFieldName(input)}`);
	}
};
const isEmail = (emailInput) => {
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	emailInput.oninput = () => {
		regexEmail.test(emailInput.value)
			? showSuccess(emailInput, "")
			: showError(emailInput, "Email không hợp lệ");
	};
};

const ckMatchingValue = (input1, input2) => {
	input1.oninput = () => {
		input1.value == input2.value
			? showSuccess(input1, "")
			: showError(input1, `${getFieldName(input1)} doesn't match !`);
	};
};

const checkLength = (input, minLength) => {
	input.oninput = () => {
		input.value.length >= minLength
			? showSuccess(input, "")
			: showError(
					input,
					`${getFieldName(input)} phải có tối thiểu ${minLength} ký tự`
			  );
	};
};

const isPhoneNumber = (input) => {
	input.oninput = () => {
		if (input.value == +input.value && input.value.length == 10)
			showSuccess(input, "");
		else showError(input, `${getFieldName(input)} không hợp lệ`);
		console.log(typeof input.value);
	};
};
