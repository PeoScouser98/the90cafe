// get product list from localstorage
const productInCart = JSON.parse(localStorage.getItem("productInCart"));
const productList = $("#product-list");
const totalAmount = $("#total-amount");

/**
 * RENDER PRODUCT IN CART FROM LOCAL STORAGE
 */
function renderProduct(data) {
	if (Array.isArray(data)) {
		console.log(typeof data);
		const products = data
			.map((item, index) => {
				item.totalPrice = item.price * item.quantity;
				return /*html */ `<div class="product">
					<div class="font-bold product-name" style="color:var(--primary-1)">${item.name}</div>
					<div class="product-infor">
						<div class="price">${item.price}</div>
						<div>
							<input type="number" class="quantity border border-gray-200 rounded-lg" min="1" value="${item.quantity}" oninput="calculateTotalPrice(this,${index})">
						</div>
						<div class="total-price">${item.totalPrice}</div>
						<div>
							<button class="remove-btn px-8 py-3" onclick="removeProduct(${index})">
								Xóa
							</button>
						</div>
					</div>
				</div>`;
			})
			.join("");
		productList.innerHTML = products;
		getTotalAmount();
		if (totalAmount.innerText == 0) showEmpty();
	}
}
renderProduct(productInCart);

/**
 * CALCULATE PRODUCT'S TOTAL PRICE WHEN CHANGING QUANTITY
 */
function calculateTotalPrice(input, index) {
	const product = productInCart.find((item) => item.id == index);
	product.totalPrice = product.price * input.value;
	const totalPrice =
		input.parentElement.parentElement.querySelector(".total-price");
	totalPrice.innerText = product.totalPrice;
	getTotalAmount();
}

/**
 * REMOVE PRODUCT FROM CART
 *  */
function removeProduct(index) {
	const deletedProduct = productInCart.find((item) => item.id == index);
	productInCart.splice(productInCart.indexOf(deletedProduct), 1);
	localStorage.setItem("productInCart", JSON.stringify(productInCart));
	renderProduct(productInCart);
	getTotalAmount();
	if (totalAmount.innerText == 0) showEmpty();
}

/**
 * SHOW EMPTY MESSAGE IF THERE IS NO PRODUCT IN CART
 *  */
function showEmpty() {
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
}

/**
 * CALCULATE TOTAL AMOUNT THAT CLIENT HAVE TO PAY
 */
function getTotalAmount() {
	totalAmount.innerHTML = productInCart.reduce(
		(previousValue, currentValue) => {
			return previousValue + currentValue.totalPrice;
		},
		0
	);
}

// check booking validate
const name = $("#name");
const phone = $("#phone");
const detailAddress = $("#detail-address");
const district = $("#district");

// check validate form when clicking on submit button
const submitButton = $("#booking-submit");
submitButton.onclick = function () {
	isRequired([name, phone, detailAddress, district]);
	checkLength(phone, 10);
	isPhoneNumber(phone);
	const allMessage = $(".error-message");
	let errorCount = 0;
	for (const message of allMessage) {
		if (message.innerText != "") errorCount++;
	}
	const totalAmount = $("#total-amount");
	if (totalAmount.innerText != 0) hasProduct = true;
	if (errorCount == 0 && hasProduct === true) {
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
