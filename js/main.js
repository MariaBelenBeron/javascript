const carrito = []

const productos = [
    { imagen: '💐', codigo: 1, tipo: 'producto 1', precio: 1500 },
    { imagen: '🌱', codigo: 2, tipo: 'producto 2', precio: 3500 },
    { imagen: '🌸', codigo: 3, tipo: 'producto 3', precio: 2700 },
    { imagen: '🌵', codigo: 4, tipo: 'producto 4', precio: 1800 },
    { imagen: '🌺', codigo: 5, tipo: 'producto 5', precio: 2200 },
    { imagen: '🍃', codigo: 6, tipo: 'producto 6', precio: 2900 },
    { imagen: '🌻', codigo: 7, tipo: 'producto 7', precio: 3100 },
    { imagen: '🌿', codigo: 8, tipo: 'producto 8', precio: 1999 },
    { imagen: '🌷', codigo: 9, tipo: 'producto 9', precio: 1700 },
    { imagen: '🍀', codigo: 10, tipo: 'producto 10', precio: 3400 },
    { imagen: '🌹', codigo: 11, tipo: 'producto 11', precio: 2800 },
    { imagen: '🌼', codigo: 12, tipo: 'producto 12', precio: 2499 },
    { imagen: '🌲', codigo: 13, tipo: 'producto 13', precio: 4500 },
    { imagen: '🌴', codigo: 14, tipo: 'producto 14', precio: 4799 },
    { imagen: '🍂', codigo: 15, tipo: 'producto 15', precio: 2200 },
    { imagen: '🌳', codigo: 16, tipo: 'producto 16', precio: 1600 }
];

const mensajeInicial = "Selecciona el codigo del producto que quieras agregar al carrito "

function buscarProducto(codigo) {
    let resultado = productos.find((producto) => producto.codigo === parseInt(codigo))
    return resultado
}

function verCarrito(){
    console.table(carrito)
}

function finalizarCompra(){
    if (carrito.length > 0 ){
        const shopping = new Compra (carrito)
        let resultado = confirm("¿Desea consultar cuotas sin interes?")
    if(resultado == true) {
    cuotas = prompt("Ingrese la cantidad de cuotas (3, 6 o 12):").trim()
    if (cuotas !== "3" && cuotas !== "6" && cuotas !== "12") {
        alert("❌ Cantidad de cuotas invalida, ingrese 3, 6 o 12")
        return finalizarCompra()
    } else {
        const valorCuota = shopping.obtenerSubtotal() / cuotas
        alert("El valor de cada cuota es $" + valorCuota.toFixed(2))
        }
    }
    let costEnvio = 0
    let envio = confirm("¿Desea agregar envío por $1000 🚚?")
    if (envio == true) {
        costEnvio = 1000
        alert ("El total de su compra con envio 🚚 es $" + (shopping.obtenerSubtotal() + costEnvio))
    }else{
        alert("El total de su compra sin envio es $" + shopping.obtenerSubtotal())
    }
        let respuesta = confirm ("¿Queres realizar el pago?")
        if (respuesta == true ){
            let total = shopping.obtenerSubtotal() + costEnvio
            alert(`El pago de $${total} fue exitoso ✅ \n ¡Muchas gracias por tu compra 🙂!`)
            //alert (shopping.confirmarCompra)
            carrito.length = 0
    } else {
        console.warn("No hay productos en el carrito.")
    }
  }
}

function comprar(){ 
    let codigo = prompt (mensajeInicial)
    if (!parseInt (codigo)) {
        alert ("❌Codigo inexistente, ingrese codigo valido.")
        let respuesta = confirm ("¿Deseas intentar nuevamente?")
    if (respuesta) {
        comprar()
        }
        return
    }

    let productoElegido = buscarProducto(codigo)
    if (productoElegido !== undefined){
        alert (` El ${productoElegido.tipo} ${productoElegido.imagen} ha sido agregado al carrito.\n Precio $ ${productoElegido.precio}`)
        carrito.push(productoElegido)
        let respuesta = confirm("¿Deseas llevar otro producto?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
    } else {
        alert ("❌Codigo inexistente, ingrese codigo valido.")
        let respuesta = confirm ("¿Desea intentar denuevo?")
        if  (respuesta) {
            comprar ()
        }    
        return
    }
}