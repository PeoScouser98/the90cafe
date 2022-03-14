// sản phẩm
const Coffee = [
	{
		imgSrc: "./img/Products/coffee/cold-brew.jpg",
		productName: "Cold Brew",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/coffee/bac-siu.jpg",
		productName: "Bạc Sỉu",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/coffee/cafe-den-da.jpg",
		productName: "Đen đá",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/coffee/ca-phe-sua-da.jpg",
		productName: "Cà phê sữa đá",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/coffee/espresso.jpg",
		productName: "Espresso",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/coffee/capuchino.jpg",
		productName: "Capuchino",
		price: 19000,
	},
];
const Tea = [
	{
		imgSrc: "./img/Products/tea/tra_sao_cam_sa.png",
		productName: "Trà đào cam sả",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/tea/tra-sen.jpg",
		productName: "Trà hạt sen long nhãn",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/tea/tra-o-long.jpg",
		productName: "Trà ô long",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/tea/tra-dao-nong.jpg",
		productName: "Trà đào cam sả nóng",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/tea/tra-cuc.jfif",
		productName: "Trà hoa Cúc",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/tea/tra-atiso-do.jpg",
		productName: "Trà Atiso đỏ",
		price: 19000,
	},
];
const Smoothies = [
	{
		imgSrc: "./img/Products/smoothies/smoothies-xoai.jpg",
		productName: "Smoothies Xoài",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/smoothies/smoothies-viet-quat.jpg",
		productName: "Smoothies Việt Quất",
		price: 19000,
	},

	{
		imgSrc: "./img/Products/smoothies/smoothies-chocolate.jpg",
		productName: "Smoothies Chocolate",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/smoothies/smoothies-yoghurt.jpg",
		productName: "Smoothies Sữa Chua",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/smoothies/cookies-da-xay.jpg",
		productName: "Cookies đá xay",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/smoothies/matcha-da-xay.jfif",
		productName: "Matcha đá xay",
		price: 19000,
	},
];
const Juices = [
	{
		imgSrc: "./img/Products/juices/chanh-leo.jpg",
		productName: "Chanh leo đá",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/juices/cam-da.jpg",
		productName: "Cam ép đá",
		price: 19000,
	},

	{
		imgSrc: "./img/Products/juices/ep-dua.jpg",
		productName: "Nước ép dứa",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/juices/carrot-juice.jpg",
		productName: "Nước ép Táo Cà rốt",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/juices/me-da.jpg",
		productName: "Me Đá",
		price: 19000,
	},
	{
		imgSrc: "./img/Products/juices/Lemon-Juice.jpg",
		productName: "Chanh đá bạc hà",
		price: 19000,
	},
];
// RENDER PRODUCT TO HTML DOCUMENT
const addProduct = (data, productID) => {
	const products = data
		.map((item) => {
			return /*html*/ `<div>
       <div class="relative">
           <img src=${item.imgSrc} alt=""/>
           <div class="addToCart-hover absolute z-10 top-0 left-0 w-full h-full">
               <span class="relative top-1/2 text-center -translate-y-1/2 text-white text-6xl font-bold"><i class="bi bi-cart-plus"></i></span>
           </div>
       </div>
       <!-- product name -->
       <span class="product-name text-left sm:text-base md:text-xl lg:text-2xl text-primary">${item.productName}</span>
       <!-- price -->
       <span><span class="price inline-block text-left">${item.price}</span> đ</span>

   </div>`;
		})
		.join("");
	const productList = document.querySelector(`#${productID}`);
	productList.innerHTML = products;
};
addProduct(Coffee, "coffee");
addProduct(Tea, "tea");
addProduct(Smoothies, "smoothies");
addProduct(Juices, "juices");

/**
 * show beverage menu on mobile
 */
const dropdownMenu = document.querySelector("#dropdownMenu");
dropdownMenu.addEventListener("mousedown", (event) => {
	event.preventDefault();
});
/**
 * **********************************************
 * ***********THÊM SẢN PHẨM TỪ MODAL************
 * **********************************************
 */
const productModal = document.querySelector(".modal");
const addToCart_hover = document.querySelectorAll(".addToCart-hover");
const quantity = document.querySelector("#quantity");
const addToCart_button = document.querySelector("#addToCart-btn");
// const successMessage = document.querySelector(".success-message");
const selectedQuantity = document.querySelector("#selected-quantity");
const totalAmount = document.querySelector(".totalAmount");
const ok = document.querySelector("#ok");
/**
 * product modal
 */
let productInCart = [];
let index = 0;
for (const item of addToCart_hover) {
	item.onclick = () => {
		/**
		 *  show modal
		 *  */
		document.body.classList.toggle("scrollable");
		productModal.style.display = "block";
		/**
		 * render product's image to modal
		 *  */
		const productImage = item.parentElement.querySelector("img");
		const imgModal = productModal.querySelector("img");
		imgModal.src = productImage.src;
		/**
		 * push product name into modal
		 *  */
		const productName =
			item.parentElement.parentElement.querySelector(".product-name");
		const productName_modal = productModal.querySelector(".product-name");
		productName_modal.innerText = productName.innerText;
		/**
		 * push product's price into modal
		 *  */
		const productPrice =
			item.parentElement.parentElement.querySelector(".price").innerText;
		const modalPrice = document.querySelector(".unit-price");
		modalPrice.innerText = +productPrice;
		/**
		 * calculate total price
		 *  */
		totalAmount.innerText = quantity.value * modalPrice.innerText;
		quantity.oninput = () => {
			totalAmount.innerText = quantity.value * modalPrice.innerText;
		};
		/**
		 * adding product into cart
		 * */
		addToCart_button.onclick = () => {
			selectedQuantity.parentElement.style.visibility = "visible";

			// show quantity of chosen product
			// show success message
			swal({
				title: "Đặt hàng thành công!",
				icon: "success",
				button: false,
				timer: 1000,
				position: "center",
			});
			productInCart.push({
				id: index,
				name: productName_modal.innerText,
				price: modalPrice.innerText,
				quantity: quantity.value,
				totalPrice: totalAmount.innerText,
			});
			index++;
			selectedQuantity.innerHTML = productInCart.length;
			localStorage.setItem("productInCart", JSON.stringify(productInCart));
		};
	};
}

/**
 *
 * SHOW MODAL
 *
 */
const closeModal = document.querySelector(".close");
closeModal.onclick = () => {
	document.body.classList.toggle("scrollable");
	productModal.style.display = "none";
};
window.onload = () => {
	productInCart = JSON.parse(localStorage.getItem("productInCart"));
	selectedQuantity.innerHTML = productInCart.length;
	console.log(productInCart);
};
