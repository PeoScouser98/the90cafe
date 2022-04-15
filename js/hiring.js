// upload image
const uploadBtn = $(".upload-btn");
const loadFile = function (event) {
	const photo = $("#photo");
	photo.style.display = "block";
	photo.src = URL.createObjectURL(event.target.files[0]);
	console.log(photo.src);
};
// check validate form
const cvForm = $("#cv-form");
const name = $("#name");
const age = $("#age");
const phone = $("#phone");
const email = $("#email");
const position = $("#position");
const imgFile = $("#file");
const inputArr = [name, age, phone, email, position, imgFile];
const genders = $$(".gender");

isRequired(inputArr);
cvForm.onsubmit = (event) => {
	event.preventDefault();
	checkNull(inputArr);
	checkLength(name, 5);
	isPhoneNumber(phone);
	isEmail(email);
	// checkGender(genders);
	// checkLength(phone, 10);
	let ckNull = 0;
	const messages = $$(".error-message");
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
