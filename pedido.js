//Guido Fernando Majin Ibarra

let nombre = "Fernando";
let ciudad = "Cali";
let esCliente = false;

console.log("Hola ",nombre," tu pedido a domicilio en ",ciudad, "Segun la informacion tu estado como cliente actualmente es ",esCliente);
console.log("//////////////////////////////////");
console.log("//////////////////////////////////");

//Para mi todas las variables pueden cambiar.

let pedido = ["Hamburguesa", "Papas","Gaseosa"];
console.log(pedido);
console.log(pedido[0]);
//Ahora voy agregar un producto nuevo a la lista con push
pedido.push("Postre");
console.log(pedido);

console.log("///////////////////////////////")
console.log("///////////////////////////////")
//Ahora voy a quitar el producto de postre y mostrar la logitud
pedido.pop();
console.log(pedido);
console.log(pedido.length)
console.log("///////////////////////////////")
console.log("///////////////////////////////")
//---------------------------------------------Parte 3------------------
let pedidoCompleto = {
    cliente: "Fernando",
    ciudad: "Cali",
    productos: ["Hamburguesa","Papa","Gaseosa","Postre"],
    estado: "En preparacion"
}
console.log(pedidoCompleto);
console.log(pedidoCompleto.cliente);
pedidoCompleto.estado = "Producto listo";
console.log(pedidoCompleto);
console.log("///////////////////////////////")
console.log("///////////////////////////////")
//--------------------------------parte cuatro-------------------
let valorHamburguesa = 20000;
let valorPapas = 5000;
let valorGaseosa = 2000;
const PROPINA = 0.10;
let domicilio = 4000;

let valorFinal = valorHamburguesa+valorPapas+valorGaseosa+domicilio;
let valorPropina = valorFinal*PROPINA;

let total = valorFinal+valorPropina;

console.log("----------------Factura Rappi---------------"); 
console.log("Producto 1:",pedidoCompleto.productos[0],"Precio   ",valorHamburguesa);
console.log("Producto 2 ",pedidoCompleto.productos[1],"precio          ",valorPapas)
console.log("Producto 3 ",pedidoCompleto.productos[2],"precio       ",valorGaseosa
)
console.log("Precion Domicilio                ",domicilio)
console.log("Precio propina                   ",valorPropina)
console.log("El precio total -----------------",total)
