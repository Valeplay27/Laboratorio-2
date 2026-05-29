// Ejercicio 1
/*
function Libro(titulo, autor) {
    if (typeof titulo !== "string" || typeof autor !== "string") {
        return "No cumple con los requisitos: el titulo y el autor deben tener texto.";
    }
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    
    this.prestar = function() {
        if (this.prestado === false) {
            this .prestado = true; 
            return " El libro " + this.titulo + ", ha sido prestado con éxito.";
        } else {
            return " El libro " + this.titulo + ", ya está prestado.";
        }
    };
}
const libro = new Libro("El coronel no tiene quien le escriba", "Gabriel García Márquez");
console.log(libro.prestar());
console.log(libro.prestar());
*/

// Ejercicio 2
/*
function ListaCompras() {
    this.productos = [];

    this.agregarProducto = function(producto) {
        if (typeof producto !== "string") {
            return "No cumple con los requisitos: el producto debe tener texto.";
        }
        this.productos.push(producto);
    };
this.mostrar = function() {
    if (this.productos.length === 0) {
        return "La lista de compras está vacía.";
    }
    for (let i=0; i < this.productos.length; i++) {
        console.log((i + 1) + ". " + this.productos[i]);
    } 
};
}
 const lista = new ListaCompras();
console.log(lista.mostrar()); 

lista.agregarProducto("Sal");
lista.agregarProducto("Pan");
lista.agregarProducto("Huevos");

console.log(lista.agregarProducto()); 
lista.mostrar();
*/

// Ejercicio 3
/*
function reproductor() {
    this.estado = "detenido";
    this.play = function() {
        if (this.estado === "detenido") {
            this.estado = "reproduciendo";
            return "El reproductor está reproduciendo.";
        } else if (this.estado === "pausado") {
            this.estado = "reproduciendo";
            return "Reproduciendo musica.";
        } else {
            return "El reproductor ya está reproduciendo.";
        }
    };
    this.pause = function() {
        if (this.estado === "reproduciendo") {
            this.estado = "pausado";
            return "El reproductor está pausado.";
        } else {
            return "El reproductor no está reproduciendo.";
        }
        }   
    this.detener = function() {
        this.estado = "detenido";
        return "Musica detenida.";
    };
}   

const miReproductor = new reproductor();
console.log(miReproductor.play());
console.log(miReproductor.play());
console.log(miReproductor.pause());
console.log(miReproductor.detener());
*/

// Ejercicio 4

function carrito() {
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function(nombre, precio) {
        if (typeof nombre !== "string" || typeof precio !== "number") {
            return "No cumple con los requisitos: el nombre debe tener texto y el precio debe ser un número.";
        }   
        this.productos.push({ nombre: nombre, precio: precio });
        this.total += precio;
    };
    this.calcularDescuento = function() {
        if (this.productos.length  === 0) {
            return "No se aplica descuento, el carrito está vacío.";
        } 
        if (this.total > 100) {
            let descuento = this.total * 0.1;
            return "Total con descuento: $" + (this.total - descuento);
        } else if (this.total > 50) {
            let descuento = this.total * 0.05;
            return "Total con descuento: $" + (this.total - descuento);
        } else {
            return "Total sin descuento: $" + this.total;
        }
    };
}
        const carritoUno = new carrito();
    carritoUno.agregarProducto("Camisa", 30);
    carritoUno.agregarProducto("Pantalón", 40);
    carritoUno.agregarProducto("Zapatos", 50);
    console.log(carritoUno.calcularDescuento()); 

        const carritoDos = new carrito();
    carritoDos.agregarProducto("Chaqueta", 60);
    console.log(carritoDos.calcularDescuento());