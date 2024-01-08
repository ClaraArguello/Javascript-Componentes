document.querySelector(".nav-toggle").addEventListener("click", (e) => {
	document.body.classList.toggle("dark-theme");
	e.preventDefault();
});

let img = document.querySelector(".img");
let rango = document.querySelector(".range");

rango.addEventListener("change", () => {
	img.style.filter = `brightness(${rango.value})`;
});
