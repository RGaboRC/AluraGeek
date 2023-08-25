const d = document;
const focusInput = d.querySelector(".btnBuscador");
const inputSearch = d.querySelector(".buscador");
const searchContainer = d.querySelector(".searchBox");
const iconBuscar = d.querySelector(".btnBuscador");

/* Function to display the search bar */
export default focusInput.addEventListener("click", () => {
	searchContainer.classList.remove("hide");
	inputSearch.focus();
});

/* Function to hide the search bar */
d.addEventListener("click", (e) => {
	if (!inputSearch.contains(e.target) && !focusInput.contains(e.target)) {
		searchContainer.classList.add("hide");
	}
});
window.addEventListener("scroll", (e) => {
	searchContainer.classList.add("hide");
});

/* Search function */
iconBuscar.addEventListener("click", () => {
	let buscar = inputSearch.value
		console.log(buscar)
});
