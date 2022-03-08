// upload image
const uploadBtn = document.querySelector(".upload-btn");
const loadFile = function (event) {
	const photo = document.querySelector("#photo");
	photo.style.display = "block";
	photo.src = URL.createObjectURL(event.target.files[0]);
};
// check validate form
const cvForm = document.querySelector("#cv-form");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const position = document.querySelector("#position");
const imgFile = document.querySelector("#file");
const inputArr = [name, age, phone, email, position, imgFile];
isRequired(inputArr);
checkLength(name, 5);
isPhoneNumber(phone);
isEmail(email);
cvForm.onsubmit = (event) => {
	event.preventDefault();
	checkNull(inputArr);
	// checkLength(phone, 10);
	let ckNull = false;
	const messages = document.querySelectorAll(".error-message");
	for (const message of messages) {
		if (message.innerHTML === "") ckNull = true;
		else ckNull = false;
	}
	if (ckNull == true)
		swal(
			`Cảm ơn bạn đã gửi CV cho chúng tôi!\nChúng tôi sẽ liên lạc vói bạn sớm nhất có thể`
		);
	if (ckNull == false) swal(`Vui lòng kiểm tra lại thông tin đăng ký !`);
};
