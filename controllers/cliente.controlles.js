import {
    productosServices
} from "../server/product-service.js"

const d = document;
const seccionStarwars = d.querySelector('[data-section="starwars"]');
const seccioncConsolas = d.querySelector('[data-section="consolas"]');
const seccionDiversos = d.querySelector('[data-section="diversos"]');

const crearNuevoProducto = (url, producto, precio, descripcion, categoria, id) => {
	const tarjeta = d.createElement("div");
	tarjeta.classList.add("productos__caja");
	const contenido = `
	<div class="productos__caja">
	<img src="${url}" class="img">
	<h1 class="titulos_caja">${producto}</h1>
	<h1 class="titulos_caja">$${precio}</h1>
	<a href="./allproductos.html"><h1 class="ver_productos">Ver Productos</h1></a>

    `;
	tarjeta.innerHTML = contenido;
	return tarjeta;
};


productosServices.starwars().then((data) => {
	data.forEach(({url, producto, precio, descripcion, categoria, id}) => {
		const nuevoTarjeta = crearNuevoProducto(url, producto, precio, descripcion, categoria, id);
		seccionStarwars.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));

productosServices.consolas().then((data) => {
	data.forEach(({url, producto, precio, descripcion, categoria, id}) => {
		const nuevoTarjeta = crearNuevoProducto(url, producto, precio, descripcion, categoria, id);
		seccioncConsolas.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));

productosServices.diversos().then((data) => {
	data.forEach(({url, producto, precio, descripcion, categoria, id}) => {
		const nuevoTarjeta = crearNuevoProducto(url, producto, precio, descripcion, categoria, id);
		seccionDiversos.appendChild(nuevoTarjeta);
	});
})
.catch((err)=> alert('ocurrió un error'));