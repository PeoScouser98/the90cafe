// get product list from localstorage
const productInCart = JSON.parse(localStorage.getItem("productInCart"));
// render product array to html document
const productList = $("#product-list");
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
const totalAmount = $("#total-amount");
const allTotalPrice = $$(".total-price");
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
					href="https://peoscouser98.github.io/the90cafe/product.html"
					class="text-xl backTo-store"
					>Quay lại cửa hàng</a
				>
			</p>
		</div>`;
};
showEmpty();
// removing item form cart function
const removeProduct = (button, index) => {
	const product = button.parentElement.parentElement.parentElement;
	const totalPrice = product.querySelector(".total-price");
	allPrice.splice(allPrice.indexOf(+totalPrice.innerHTML), 1);
	product.remove(product);
	// remove object inside array from localstorage
	const filteredElement = productInCart.find((item) => item.id == index);
	console.log(filteredElement);
	productInCart.splice(productInCart.indexOf(filteredElement), 1);
	// console.log(productInCart);
	localStorage.setItem("productInCart", JSON.stringify(productInCart));
	getTotalAmount();
	showEmpty();
};
// check booking validate
const name = $("#name");
const phone = $("#phone");
const detailAddress = $("#detail-address");
const district = $("#district");

// check validate form when clicking on submit button
isRequired([name, phone, detailAddress, district]);
checkLength(phone, 10);
isPhoneNumber(phone);
const submitButton = $("#booking-submit");
submitButton.onclick = () => {
	checkNull([name, phone, detailAddress, district]);
	const allMessage = $$(".error-message");
	let checkValidate = false;
	for (const message of allMessage) {
		if (message.innerText === "") checkValidate = true;
	}
	const totalAmount = $("#total-amount");
	if (totalAmount.innerText != 0) checkProduct = true;
	if (checkValidate === true && checkProduct === true) {
		swal({
			title: "Thank you!",
			text: "Cảm ơn bạn đã đã đặt sản phẩm của chúng tôi !",
			icon: "success",
			button: false,
			timer: 1500,
		});
	} else {
		swal({
			title: "Oops !",
			text: "Vui lòng kiểm tra lại thông tin mua hàng của bạn !",
			icon: "error",
			button: false,
			timer: 1500,
		});
	}
};
