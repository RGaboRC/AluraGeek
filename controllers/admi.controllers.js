import {
    productosServices
} from "../server/product-service.js"

const d = document;
const crearNuevoProducto = (url, producto, precio, descripcion, categoria, id) => {
	const tarjeta = d.createElement("div");
	tarjeta.classList.add("productos__caja");
	const contenido = `
    <div class="productos__caja">
	<img src="${url}" class="img">
	<h1 class="titulos_caja">${producto}</h1>
	<h1 class="titulos_caja">${precio}</h1>
	<a href="./allproductos.html"><h1 class="ver_productos">Ver Productos</h1> </a>

        <div class="editar__container">
        <a href="/screens/agregarProducto.html" class="editaricono" ">
            <i class="bi bi-pencil"></i>
        </a>
        <button type="button" class="eliminar__icono" id="${categoria}">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    `;
	tarjeta.innerHTML = contenido;
    const btneliminar = tarjeta.querySelector("button")
    btneliminar.addEventListener("click", ()=>{
        const id = btneliminar.id;
        productServices.eliminarProducto(id)
        .then(response => {
            console.log(response)
        }).catch(err => alert("Ocurrió un error"))
    })

	return tarjeta;
};

const seccionAll = d.querySelector('[data-productos]');
    
productosServices.allProducts().then((data) => {
	data.forEach(({url, producto, precio, descripcion, categoria, id}) => {
		const nuevoTarjeta = crearNuevoProducto(
			url, producto, precio, descripcion, categoria, id
		);
		seccionAll.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));