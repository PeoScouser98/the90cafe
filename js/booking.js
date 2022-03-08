// get product list from localstorage
const productInCart = JSON.parse(localStorage.getItem("productInCart"));
console.log(productInCart);
// render product array to html document
const productList = document.querySelector("#product-list");
const renderProduct = (data) => {
	const output = data
		.map((item, index) => {
			item.totalPrice = item.price * item.quantity;
			// console.log(index);
			return /*html */ `<div class="product">
				<div class="font-bold product-name" style="color:var(--primary-1)">${item.name}</div>
				<div class="product-infor">
					<div class="price">${item.price}</div>
					<div>
						<input type="number" class="quantity border border-gray-200 rounded-lg" min="1" value="${item.quantity}" oninput="calculateSum(this)">
					</div>
					<div class="total-price">${item.totalPrice}</div>
					<div>
						<button class="remove-btn px-8 py-3" onclick="removeProduct(this,${index})">
							Xóa
						</button>
					</div>
				</div>
			</div>`;
		})
		.join("");

	productList.innerHTML = output;
};
renderProduct(productInCart);

// get total price
const allPrice = [];
const totalAmount = document.querySelector("#total-amount");
const allTotalPrice = document.querySelectorAll(".total-price");
for (const totalPrice of allTotalPrice) {
	allPrice.push(+totalPrice.innerText);
}
const getTotalAmount = () => {
	totalAmount.innerHTML = allPrice.reduce((currentValue, firstValue) => {
		return currentValue + firstValue;
	}, 0);
};
getTotalAmount();
function calculateSum(input) {
	const price =
		input.parentElement.parentElement.querySelector(".price").innerHTML;
	const quantity = input.value;
	const totalPrice =
		input.parentElement.parentElement.querySelector(".total-price");
	// remove previous total price
	allPrice.splice(allPrice.indexOf(+totalPrice.innerHTML), 1);
	totalPrice.innerHTML = +quantity * +price;
	// push current total price
	allPrice.push(+totalPrice.innerHTML);
	console.log(allPrice);
	getTotalAmount();
}
// show empty message
const showEmpty = () => {
	if (totalAmount.innerText == 0)
		productList.innerHTML = /*html */ `<div class="flex flex-col justify-center items-center gap-10 relative top-1/2 -translate-y-1/2">
			<p class="text-center font-bold" style="font-size:80px; color:red"><i class="bi bi-cart-x"></i></p>
			<p class="text-center relative">
				<a
					href="https://the90cafe.cf/product.html"
					class="text-xl backTo-store"
					>Quay lại cửa hàng</a
				>
			</p>
		</div>`;
};
showEmpty();
// removing item form cart function
const removeProduct = (button, index) => {
	// remove product from cart list
	const product = button.parentElement.parentElement.parentElement;
	const totalPrice = product.querySelector(".total-price");
	allPrice.splice(allPrice.indexOf(+totalPrice.innerHTML), 1);
	product.remove(product);
	getTotalAmount();
	// remove object inside array from localstorage
	console.log(index);
	productInCart.splice(index, 1);
	localStorage.setItem("productInCart", JSON.stringify(productInCart));
	showEmpty();
};
// check booking validate
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const detailAddress = document.querySelector("#detail-address");
const district = document.querySelector("#district");
const bookingMessage = document.querySelector("#booking-message");

// check validate form when clicking on submit button
isRequired([name, phone, detailAddress, district]);
checkLength(phone, 10);
isPhoneNumber(phone);
const submitButton = document.querySelector("#booking-submit");
submitButton.onclick = () => {
	checkNull([name, phone, detailAddress, district]);
	const allMessage = document.querySelectorAll(".error-message");
	let checkValidate = false;
	for (const message of allMessage) {
		if (message.innerText === "") checkValidate = true;
	}
	const totalAmount = document.querySelector("#total-amount");
	bookingMessage.style.visibility = "visible";
	const errorMessage = document.querySelector("#error");
	const successMessage = document.querySelector("#success");
	if (totalAmount.innerText != 0) checkProduct = true;
	if (checkValidate === true && checkProduct === true) {
		successMessage.style.display = "block";
		errorMessage.style.display = "none";
	} else {
		successMessage.style.display = "none";
		errorMessage.style.display = "block";
	}
	document.body.classList.toggle("scrollable");
};
bookingMessage.onclick = () => {
	document.body.classList.toggle("scrollable");
	bookingMessage.style.visibility = "hidden";
};