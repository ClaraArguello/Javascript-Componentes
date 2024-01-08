let sectionNumbers = document.querySelector(".section-numbers");
let sectionHome = document.querySelector(".section-home");

document.querySelector(".home").addEventListener("click", (e) => {
	sectionNumbers.classList.add("oculto");
	sectionHome.classList.remove("oculto");
	e.preventDefault();
});
document.querySelector(".numeros").addEventListener("click", (e) => {
	sectionHome.classList.add("oculto");
	sectionNumbers.classList.remove("oculto");
	e.preventDefault();
});
