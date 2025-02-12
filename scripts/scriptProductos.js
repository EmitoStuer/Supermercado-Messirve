const nombreProductos = ["Yerba", "Azucar", "Leche", "Huevo", "Pan Rallado", "Mermelada", "Muzzarella", "Facturas", "Galletitas", "Pan", "Gaseosa", "Jugo", "Cerveza"];

const descripcionProductos = ["Andresito x 1Kg", "La Otamendi x 1Kg", "Higuain x 1Lt", "Doble Dibu x Docena", "Mac Callister x 1Kg", "Alvarez x 500Gr", "La Scaloneta x 1Kg", "Variedades x Doc", "El Cuty x 500Gr", "El Pampa Messi x 500Ml", "Toros x 1Lt", "Aimar x 1Lt","El Marcherano x 470Ml" ];

const preciosProductos = [3000, 2000, 1500, 2000, 1000, 1500, 5000, 2500, 1200, 1500, 2000, 2000, 2000];

const stockProductos = [8, 11, 20, 10, 13, 24, 2, 6, 40, 30, 53, 28, 13];

const productosImagenes = ["../imagenes/yerba.jpg", "../imagenes/azucar.jpg", "../imagenes/leche.jpg", "../imagenes/huevos.jpg", "../imagenes/panRallado.jpg", "../imagenes/mermelada.jpg", "../imagenes/quesoCremoso.jpg", "../imagenes/facturas.jpg", "../imagenes/galletitas.jpg", "../imagenes/pan.jpg", "../imagenes/gaseosa.jpg", "../imagenes/aguaSaborizada.jpg", "../imagenes/cerveza.jpg"];

const descripcionImagenes = ["Imagen de yerba", "Imagen de azucar", "Imagen de leche", "Imagen de huevos", "Imagen de pan rallado", "Imagen de mermelada", "Imagen de queso cremoso", "Imagen de facturas", "Imagen de galletitas", "Imagen de pan", "Imagen de jpg", "Imagen de agua saborizada", "Imagen de cerveza"];

for (let i = 0; i < nombreProductos.length; i++) {
    cargarProductos(nombreProductos[i], descripcionProductos[i], preciosProductos[i], stockProductos[i], productosImagenes[i],descripcionImagenes[i],i);
}   
    let contenedorTotal = document.getElementById("ofertas");
    let nuevoElementoDivFinal = document.createElement("div");
        nuevoElementoDivFinal.setAttribute("class","total");
    let total = 0;
    let nuevoElementoH3 = document.createElement("h3");
        nuevoElementoH3.setAttribute("id", "precioTotal");
    let textoElementoH3 = document.createTextNode("Total: $"+total);
    
    nuevoElementoH3.appendChild(textoElementoH3);
    nuevoElementoDivFinal.appendChild(nuevoElementoH3);
    contenedorTotal.appendChild(nuevoElementoDivFinal);

    let nuevoElementoButtonComprar = document.createElement("button");
    nuevoElementoButtonComprar.setAttribute("id", "comprar");
    nuevoElementoButtonComprar.setAttribute("type", "submit");
    let textoElementoButtonComprar = document.createTextNode("Comprar");
    nuevoElementoButtonComprar.addEventListener("click",comprarProductos);

    nuevoElementoButtonComprar.appendChild(textoElementoButtonComprar)
    nuevoElementoDivFinal.appendChild(nuevoElementoButtonComprar);
    contenedorTotal.appendChild(nuevoElementoDivFinal);

    

function cargarProductos(nombre, descripcion, precio, stock, imagen, descripcionImagen, index) {

    let contenedorOfertas = document.getElementById("ofertas");

    let card = document.createElement("div");
        card.setAttribute("class", "cardProd");
        card.setAttribute("id", index);

    
    let elementoImagen = document.createElement("img");
        elementoImagen.setAttribute("class", "imagenesOfertas");
        elementoImagen.setAttribute("src", imagen);
        elementoImagen.setAttribute("alt", descripcionImagen);


    let nuevoElementoH2 = document.createElement("h2");

    let textoElementoH2 = document.createTextNode(nombre);

    let nuevoElementoPTexto = document.createElement("p");

    let textoElementoHPTexto = document.createTextNode(descripcion);

    let nuevoElementoPPrecio = document.createElement("p");

    let nuevoElementoStrongPrecio = document.createElement("strong");

    let textoElementoPPrecio = document.createTextNode(`$ ${precio}`);

    let nuevoElementoInputStock = document.createElement("input");
        nuevoElementoInputStock.setAttribute("type", "number");
        nuevoElementoInputStock.setAttribute("placeholder","Quedan: "+stock);

        let nuevoElementoButton = document.createElement("button");
        nuevoElementoButton.setAttribute("id", "agregar");
        nuevoElementoButton.setAttribute("data-id", index);
        nuevoElementoButton.setAttribute("type", "button");
        let textoElementoButton = document.createTextNode("Agregar");
        nuevoElementoButton.addEventListener("click",agregarProductos);
        

        card.appendChild(elementoImagen);

    nuevoElementoH2.appendChild(textoElementoH2);

    card.appendChild(nuevoElementoH2);

    nuevoElementoPTexto.appendChild(textoElementoHPTexto);

    card.appendChild(nuevoElementoPTexto);

    nuevoElementoStrongPrecio.appendChild(textoElementoPPrecio);

    nuevoElementoPPrecio.appendChild(nuevoElementoStrongPrecio);

    card.appendChild(nuevoElementoPPrecio);

    card.appendChild(nuevoElementoInputStock);

    nuevoElementoButton.appendChild(textoElementoButton);

    card.appendChild(nuevoElementoButton);

    contenedorOfertas.appendChild(card);

}

function agregarProductos(e){
    let btn = e.target;
    let idProducto = btn.getAttribute("data-id");
    let producto = document.getElementById(idProducto);
    let inputSeleccionado = producto.querySelector("input");
    let cantidadSeleccionada = inputSeleccionado.value;
        let precioUnidad = preciosProductos[idProducto];
        if (cantidadSeleccionada>0){
            if (/^\d+$/.test(cantidadSeleccionada)) {
                if (cantidadSeleccionada<=stockProductos[idProducto]){
                    stockProductos[idProducto]-=cantidadSeleccionada;
                    inputSeleccionado.setAttribute("placeholder",`Quedan: ${stockProductos[idProducto]}`);
                    total = total + (precioUnidad*cantidadSeleccionada);
                    let precioTotal = document.getElementById("precioTotal");
                    precioTotal.innerText= "Total: $"+total;
                    inputSeleccionado.value = "";
                }else{
                    alert ("No hay stock suficiente")
                    inputSeleccionado.value = "";
                }
            } else {
                alert ("Ingrese numeros enteros")
                    inputSeleccionado.value = "";
            }    
                
           
        }else{
            alert("Ingrese cantidad Mayor que cero");
            inputSeleccionado.value = "";
    }

}

function comprarProductos(){
    alert("Compra Exitosa, Total a pagar : $"+total);
    window.location.href = "../index.html";
}


