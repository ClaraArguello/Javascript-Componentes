let img = document.querySelector(".img");
let rango = document.querySelector(".range");

rango.addEventListener("change", () => {
	img.style.filter = `brightness(${rango.value})`;
});
