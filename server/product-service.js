

    const starwars = () =>
	fetch("http://localhost:3000/producto?categoria=StarWars").then(
		(response) => response.json()
	);
const consolas = () =>
	fetch("http://localhost:3000/producto?categoria=Consolas").then(
		(response) => response.json()
	);
const diversos = () =>
	fetch("http://localhost:3000/producto?categoria=Diversos").then(
		(response) => response.json()
	);

const allProducts = () =>
	fetch("http://localhost:3000/producto").then((response) =>
		response.json()
	);

const crearNuevoProducto = (url, producto, precio, descripcion, categoria)=>{
	return fetch("http://localhost:3000/producto", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify({
			url,
			categoria,
			producto,
			precio,
			descripcion,
			id: uuid.v4()
		})
	});
};

const eliminarProducto = (id)=>{
	return fetch(`http://localhost:3000/producto/${id}`, {
		method: "DELETE"
	})
}


export const productosServices ={
	starwars,
	consolas,
	diversos,
	allProducts,
	crearNuevoProducto,
	eliminarProducto
}