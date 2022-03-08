/**
 * ----------------------------------------------------------
 *       push fixed component into html document
 * ----------------------------------------------------------
 */
const header = document.querySelector("header");
const footer = document.querySelector("footer");
header.innerHTML = /*html */ `<div
class="flex justify-between items-center max-w-7xl mx-auto sm:px-3"
>
<!-- logo -->
<a href="https://the90cafe.cf/">
    <img
        src="./img/logo-cafe/logo-cafe-1.png"
        alt=""
        class="block"
        style="max-width: 240px; object-fit: contain"
    />
</a>
<!-- menu on wide screen devices -->
<nav class="sm:hidden md:hidden lg:block">
    <ul class="menu flex justify-end gap-12 text-white text-xl">
        <li>
            <a href="https://peoscouser98.github.io/the90cafe/">Trang Chủ</a>
        </li>
        <li>
            <a href="https://peoscouser98.github.io/the90cafe/product.html">Menu Đô Uống</a>
        </li>

        <li>
            <a href="https://peoscouser98.github.io/the90cafe/reservation.html">Đặt Bàn</a>
        </li>
        <li>
            <a href="https://peoscouser98.github.io/the90cafe/hiring.html">Tuyển Dụng</a>
        </li>
    </ul>
</nav>
<!-- menu on mobile devices -->
<button
    id="menu-mb-btn"
    class="sm:block md:block lg:hidden text-white text-2xl"
>
    <i class="fas fa-bars"></i>
</button>
<nav
    id="menu-mb"
    class="fixed z-50 w-full h-full top-0 right-0 translate-x-full bg-neutral-900 duration-300"
>
    <button
        id="close-menu-mb"
        class="text-white m-4 text-2xl absolute right-2"
    >
        <i class="fas fa-times"></i>
    </button>
    <ul
        class="flex flex-col justify-center gap-14 relative top-1/2 -translate-y-1/2 text-white max-w-fit mx-auto sm:text-2xl md:text-3xl"
    >
        <li class="duration-300">
            <a
                href="https://peoscouser98.github.io/the90cafe/"
                class="flex justify-start items-center gap-5"
            >
                <span class="w-8 text-center">
                    <i class="fas fa-home"></i>
                </span>
                <span>Trang Chủ</span>
            </a>
        </li>
        <li class="duration-300">
            <a
                href="https://peoscouser98.github.io/the90cafe/product.html"
                class="flex justify-start items-center gap-5"
            >
                <span class="w-8 text-center">
                    <i class="fas fa-clipboard-list"></i>
                </span>
                <span>Menu Đô Uống</span>
            </a>
        </li>
        <li class="duration-300">
            <a
                href="https://peoscouser98.github.io/the90cafe/reservation.html"
                class="flex justify-start items-center gap-5"
            >
                <span class="w-8 text-center">
                    <i class="far fa-calendar-alt"></i>
                </span>
                <span>Đặt Bàn</span>
            </a>
        </li>
        <li class="duration-300">
            <a
                href="https://peoscouser98.github.io/the90cafe/hiring.html"
                class="flex justify-start items-center gap-5"
            >
                <span class="w-8 text-center">
                    <i class="fas fa-user-tie"></i>
                </span>
                <span>Tuyển Dụng</span>
            </a>
        </li>
    </ul>
</nav>
</div>`;
footer.innerHTML = /*html */ `	<div class="max-w-7xl mx-auto px-3">
<!-- top -->
<div class="logo-footer sm:block md:block lg:table">
    <img
        src="./img/logo-cafe/logo-cafe-1.png"
        alt=""
        class="mx-auto w-60 object-contain"
    />
</div>
<!-- information -->
<div class="my-14 sm:block lg:flex justify-between items-start">
    <div class="mt-14">
        <h1 class="sm:text-2xl lg:text-4xl font-bold">Liên Hệ Đặt Bàn</h1>
        <ul class="mt-5 sm:text-sm md:text-sm lg:text-base">
            <li class="my-3 flex justify-start gap-3 items-center">
                <span><i class="fas fa-phone-alt"></i></span>
                <span><b>Hotline:</b>033 608 9988</span>
            </li>
            <li class="my-3 flex justify-start gap-3 items-center">
                <span><i class="far fa-envelope"></i></span>
                <span><b>Email:</b>quanghiep03198@gmail.com</span>
            </li>
        </ul>
    </div>
    <div class="mt-14">
        <h1 class="sm:text-2xl lg:text-4xl font-bold">Giờ Mở Cửa</h1>
        <div class="mt-5 sm:text-sm md:text-sm lg:text-base">
            <span class="block"><b>Thứ 2 đến Thứ 6</b></span>
            <span class="font-light block mt-2">7:00-22:30</span>
            <span class="block mt-3"><b>Thứ 2 đến Thứ 6</b></span>
            <span class="font-light block mt-2">7:00-18:00</span>
        </div>
    </div>
    <div class="mt-14">
        <h1 class="sm:text-2xl lg:text-4xl font-bold">Về Chúng Tôi</h1>
        <ul class="my-5">
            <li class="my-3 flex justify-start gap-3 items-center">
                <span class="text-xl"
                    ><i class="fab fa-facebook-square"></i
                ></span>
                <span>facebook.com/the90sCafe</span>
            </li>
            <li class="my-3 flex justify-start gap-3 items-center">
                <span class="text-xl"><i class="fab fa-instagram"></i></span>
                <span>instagram.com/the-90s-cafe/</span>
            </li>
        </ul>
    </div>
</div>
<!-- address -->
<address class="flex justify-start gap-3">
    <span><i class="fas fa-map-marker-alt"></i></span>
    <span>Địa chỉ: 29/20/ Đường An Phú/ An Đồng/ Hải Phòng</span>
</address>
</div>`;

/**
 * ----------------------------
 * show menu on mobile devices
 * ----------------------------
 * */
const menuMbButton = document.querySelector("#menu-mb-btn");
const menuMobile = document.querySelector("#menu-mb");
menuMbButton.onclick = function () {
	menuMobile.style.transform = "translateX(0)";
	document.body.classList.toggle("scrollable");
};
const closeMenuBtn = document.querySelector("#close-menu-mb");
closeMenuBtn.onclick = function () {
	document.body.classList.toggle("scrollable");
	menuMobile.style.transform = "translateX(100%)";
};
