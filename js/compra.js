class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }

    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, producto) => acc + producto.precio, 0)
        } else {
            return 'Error inesperado.'
        }
    }

    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Error inesperado.') {
            let total = this.obtenerSubtotal() + costEnvio;
            if (costEnvio === 0) {
                return `El pago de $${this.obtenerSubtotal()} fue exitoso ✅ \n ¡Muchas gracias por tu compra 🙂!`;
            } else {
                return `El pago de $${total} fue exitoso ✅ \n ¡Muchas gracias por tu compra 🙂!`;
            }
        } else {
            return `❌Error en la transacción. Intenta de nuevo más tarde`;
        }
    }
}
    /*
    confirmarCompra() {
        if (this.obtenerSubtotal() !== 'Error inesperado.') {
        return `El pago de $ (${this.obtenerSubtotal()}) fue exitoso ✅ \n ¡Muchas gracias por tu compra 🙂!`;
        } else {
        return `❌Error en la transacción. Intenta de nuevo más tarde`;
        }
    }
} */