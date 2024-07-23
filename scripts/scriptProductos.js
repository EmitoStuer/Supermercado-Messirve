const nombreProductos = ["Yerba", "Azucar", "Leche", "Huevo", "Pan Rallado", "Mermelada", "Queso Cremoso", "Facturas", "Galletitas", "Pan", "Gaseosa", "Agua Saborizada", "Cerveza"];

const descripcionProductos = ["Andresito x 1Kg", "La Otamendi x 1Kg", "Higuain x 1Lt", "Doble Dibu x Docena", "Mac Callister x 1Kg", "Alvarez x 500Gr", "La Scaloneta x 1Kg", "Variedades x Doc", "El Cuty x 500Gr", "El Pampa Messi x 500Ml", "Toros x 1Lt", "Aimar x 1Lt","El Marcherano x 470Ml" ];

const preciosProductos = [3000, 2000, 1500, 2000, 1000, 1500, 5000, 2500, 1200, 1500, 2000, 2000, 2000];

const stockProductos = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const productosImagenes = ["../imagenes/yerba.jpg", "../imagenes/azucar.jpg", "../imagenes/leche.jpg", "../imagenes/huevos.jpg", "../imagenes/panRallado.jpg", "../imagenes/mermelada.jpg", "../imagenes/quesoCremoso.jpg", "../imagenes/facturas.jpg", "../imagenes/galletitas.jpg", "../imagenes/pan.jpg", "../imagenes/gaseosa.jpg", "../imagenes/aguaSaborizada.jpg", "../imagenes/cerveza.jpg"];

const descripcionImagenes = ["Imagen de yerba", "Imagen de azucar", "Imagen de leche", "Imagen de huevos", "Imagen de pan rallado", "Imagen de mermelada", "Imagen de queso cremoso", "Imagen de facturas", "Imagen de galletitas", "Imagen de pan", "Imagen de jpg", "Imagen de agua saborizada", "Imagen de cerveza"];

for (let i = 0; i < nombreProductos.length; i++) {
    console.log(nombreProductos);
    cargarOfertas(nombreProductos[i], descripcionProductos[i], preciosProductos[i], stockProductos[i], productosImagenes[i],descripcionImagenes[i])
}

function cargarOfertas(nombre, descripcion, precio, stock, imagen, descripcionImagen) {

    let contenedorOfertas = document.getElementById("ofertas");

    let nuevoElementoDiv = document.createElement("div");

    let nuevoElementoImg = document.createElement("img");

    nuevoElementoImg.setAttribute("class", "imagenesOfertas");
    nuevoElementoImg.setAttribute("src", imagen);
    nuevoElementoImg.setAttribute("alt", descripcionImagen);


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
        let textoElementoButton = document.createTextNode("Agregar");
        

    nuevoElementoDiv.appendChild(nuevoElementoImg);

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoH2.appendChild(textoElementoH2);

    nuevoElementoDiv.appendChild(nuevoElementoH2);

    nuevoElementoDiv.setAttribute("class", "cardProd");

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoPTexto.appendChild(textoElementoHPTexto);

    nuevoElementoDiv.appendChild(nuevoElementoPTexto);

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoStrongPrecio.appendChild(textoElementoPPrecio);

    nuevoElementoPPrecio.appendChild(nuevoElementoStrongPrecio);

    nuevoElementoDiv.appendChild(nuevoElementoPPrecio);

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoDiv.appendChild(nuevoElementoInputStock);

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoButton.appendChild(textoElementoButton);

    nuevoElementoDiv.appendChild(nuevoElementoButton);

    contenedorOfertas.appendChild(nuevoElementoDiv);

}