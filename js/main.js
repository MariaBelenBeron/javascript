const productos = [

    { imagen: './img/venta 1.png', id: "tropical-01", titulo: 'Producto 1', categoria:{nombre: "Tropicales", id: "tropical"}, precio: 1500 },
    { imagen: './img/venta 2.png', id: "suculenta-02", titulo: 'Producto 2', categoria:{nombre: "Suculentas", id: "suculenta"}, precio: 3500 },
    { imagen: './img/venta 3.png', id: "tropical-03", titulo: 'Producto 3', categoria:{nombre: "Tropicales", id: "tropical"}, precio: 2700 },
    { imagen: './img/venta 4.png', id: "cactus-04", titulo: 'Producto 4', categoria:{nombre: "Cactus", id: "cactus"}, precio: 1800 },
    { imagen: './img/venta 5.png', id: "tropical-05", titulo: 'Producto 5', categoria:{nombre: "Tropicales", id: "tropical"}, precio: 2200 },
    { imagen: './img/venta 6.png', id: "tropical-06", titulo: 'Producto 6', categoria:{nombre: "Tropicales", id: "tropical"},  precio: 2900 },
    { imagen: './img/venta 7.png', id: "cactus-07", titulo: 'Producto 7', categoria:{nombre: "Cactus", id: "cactus"}, precio: 3100 },
    { imagen: './img/venta 8.png', id: "cactus-08", titulo: 'Producto 8', categoria:{nombre: "Cactus", id: "cactus"}, precio: 1999 },
    { imagen: './img/venta 9.png', id: "suculenta-09", titulo: 'Producto 9', categoria:{nombre: "Suculentas", id: "suculenta"}, precio: 1700 },
    { imagen: './img/venta 10.png', id: "suculenta-10", titulo: 'Producto 10', categoria:{nombre: "Suculentas", id: "suculenta"}, precio: 3400 },
    { imagen: './img/venta 11.png', id: "cactus-11", titulo: 'Producto 11', categoria:{nombre: "Cactus", id: "cactus"}, precio: 2800 },
    { imagen: './img/venta 12.png', id: "tropical-12", titulo: 'Producto 12', categoria:{nombre: "Tropicales", id: "tropical"}, precio: 2499 },
    { imagen: './img/venta 13.png', id: "tropical-13", titulo: 'Producto 13', categoria:{nombre: "Tropicales", id: "tropical"}, precio: 4500 },
    { imagen: './img/venta 14.png', id: "tropical-14", titulo: 'Producto 14', categoria:{nombre: "Tropicales", id: "tropical"}, precio: 4799 },
    { imagen: './img/venta 15.png', id: "cactus-15", titulo: 'Producto 15', categoria:{nombre: "Cactus", id: "cactus"}, precio: 2200 },
    { imagen: './img/venta 16.png', id: "suculenta-16", titulo: 'Producto 16', categoria:{nombre: "Suculentas", id: "suculenta"}, precio: 1600 }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria"); 
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar"); 
const numerito = document.querySelector("#numerito");

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add ("producto");
        div.innerHTML = `
        <img class ="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="informacion">
            <h3 class= "producto-titulo">${producto.titulo}</h3>
            <p class= "producto-precio">$ ${producto.precio}</p>
            <button class="producto-agregar" id= "${producto.id}">AGREGAR</button>
        </div>
        `;  
        contenedorProductos.append (div);
    })
    actualizarBotonesAgregar();
    }
cargarProductos(productos);

botonesCategorias.forEach(boton => {
boton.addEventListener("click", (e) => {
    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
        const productoCategoria = productos.find (producto =>producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
    const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    cargarProductos(productosBoton);
    } else {
    tituloPrincipal.innerText = "Todos los productos";
    cargarProductos(productos);
    }
}) 
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito); 
});
}

let productosEnCarrito;
let productosEnCarritoLS= localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}


function agregarAlCarrito (e) {
    const idBoton = e.currentTarget.id;
const productoAgregado = productos.find(producto => producto.id === idBoton);

if (productosEnCarrito.some(producto => producto.id === idBoton)){
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
}else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push (productoAgregado);
}

actualizarNumerito ();

localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

} 