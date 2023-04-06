// To append the article

const article = document.querySelector("#newscenter__article");

const loadSection = page => {
	fetch(`./${page}`) // Fetching our local page (check pub.html)
		.then(res => res.ok && res.text())
		.then(section => (article.innerHTML = section));
};

// Responsive layout (Burger menu & Searchbox)

const searchIcon = document.querySelector(".header__search-icon");
const closeIcon = document.querySelector(".header__search-close");
const searchBox = document.querySelector(".header__searchbox");
const burgerBtn = document.querySelector(".header__burger");
const navigation = document.querySelector(".navbar");
const mainNav = document.querySelector(".mainnav");
const body = document.querySelector("body");

searchIcon.addEventListener("click", () => {
	searchBox.classList.add("active");
	searchIcon.classList.add("active");
	closeIcon.classList.add("active");
	burgerBtn.classList.add("hide");
});

closeIcon.addEventListener("click", () => {
	searchBox.classList.remove("active");
	searchIcon.classList.remove("active");
	closeIcon.classList.remove("active");
	burgerBtn.classList.remove("hide");
});

burgerBtn.addEventListener("click", () => {
	console.log("hi");
	mainNav.classList.toggle("open");
	body.classList.toggle("lightgray");
});

// Tablet breakpoint
const mediaTabletQuery = window.matchMedia("(max-width: 1080px)");
const mediaDesktopQuery = window.matchMedia("(min-width: 1081px)");
const mediaMobileQuery = window.matchMedia("(max-width: 768px)");

const news = document.querySelector(".news");
const newsRight = document.querySelector(".newsright");
const newsLeft = document.querySelector(".newsleft");
if (mediaTabletQuery.matches) {
	newsRight.appendChild(newsLeft);
} else if (mediaDesktopQuery.matches) {
	news.prepend(newsLeft);
} else if (mediaMobileQuery.matches) {
	news.appendChild(newsLeft);
}
