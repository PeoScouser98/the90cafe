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
cvForm.onsubmit = (event) => {
	event.preventDefault();
	checkNull(inputArr);
	isRequired(inputArr);
	checkLength(name, 5);
	isPhoneNumber(phone);
	isEmail(email);
	// checkLength(phone, 10);
	let ckNull = 0;
	const messages = document.querySelectorAll(".error-message");
	for (const message of messages) {
		if (message.innerHTML != "") ckNull++;
	}
	if (ckNull == 0) {
		swal({
			title: "Thank you!",
			text: "Cảm ơn bạn đã gửi CV cho chúng tôi! Chúng tôi sẽ liên hệ lại với bạn !",
			icon: "success",
			button: false,
			timer: 1500,
		});
	}
	if (ckNull != 0) {
		swal({
			title: "Oops !",
			text: "Vui lòng kiểm tra lại thông tin đăng ký của bạn !",
			icon: "error",
			button: false,
			timer: 1500,
		});
	}
};
