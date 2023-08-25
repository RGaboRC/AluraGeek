import {
    productosServices
} from "../server/product-service.js"

const d = document;
const form = d.querySelector("[data-form]");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const url = d.querySelector("[data-url]").value;
    const producto = d.querySelector("[data-producto]").value;
    const categoria = d.querySelector("[data-categoria]").value;
    const precio = d.querySelector("[data-precio]").value;
    const descripcion = d.querySelector("[data-descripcion]").value;
    
    productosServices.crearNuevoProducto(url, producto, precio, descripcion, categoria)
    .then(()=>{
        window.location.href = "../screens/admis/admiProducto.html"
    }).catch(err => console.log(err));
})


