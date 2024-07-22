const ofertasNombres = ["Promo Cafecito", "Promo Almuerzo", "Promo Merienda"];

const ofertasDescripcion = ["Leche en polvo + Cafe Instantaneo x2 + Azucar", "Arroz + Fideos x2 + Polenta", "Galletitas a Eleccion + Chocolatada x 2"];

const ofertasPrecios = [10000, 6000, 7000];

const ofertasImagenes = ["./imagenes/promoCafecito.jpg", "./imagenes/promoAlmuerzo.jpg", "./imagenes/promoMerienda.jpg"];

const descripcionImagenes = ["Imagen de Cafe", "Imagen de Plato de Comida", "Imagen de Medialunas"];

for (let i = 0; i < ofertasNombres.length; i++) {
    cargarOfertas(ofertasNombres[i], ofertasDescripcion[i], ofertasPrecios[i], ofertasImagenes[i],descripcionImagenes[i])
}

function cargarOfertas(nombre, descripcion, precio, imagen,descripcionImagen) {

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

    nuevoElementoDiv.appendChild(nuevoElementoImg);

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoH2.appendChild(textoElementoH2);

    nuevoElementoDiv.appendChild(nuevoElementoH2);

    nuevoElementoDiv.setAttribute("class", "card");

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoPTexto.appendChild(textoElementoHPTexto);

    nuevoElementoDiv.appendChild(nuevoElementoPTexto);

    contenedorOfertas.appendChild(nuevoElementoDiv);

    nuevoElementoStrongPrecio.appendChild(textoElementoPPrecio);

    nuevoElementoPPrecio.appendChild(nuevoElementoStrongPrecio);

    nuevoElementoDiv.appendChild(nuevoElementoPPrecio);

    contenedorOfertas.appendChild(nuevoElementoDiv);


}
/*
let contenedorOfertas = document.getElementById("ofertas");

let nuevoElementoDiv = document.createElement("div");

let nuevoElementoImg = document.createElement("img");

nuevoElementoImg.setAttribute("class", "imagenesOfertas");
nuevoElementoImg.setAttribute("src", ofertasImagenes[0]);
nuevoElementoImg.setAttribute("alt", descripcionImagenes[0]);


let nuevoElementoH1 = document.createElement("h1");

let textoElementoH1 = document.createTextNode(ofertasNombres[0]);

let nuevoElementoH2 = document.createElement("h2");

let textoElementoH2 = document.createTextNode(ofertasDescripcion[0])

let nuevoElementoP = document.createElement("p");

let textoElementoP = document.createTextNode(`$ ${ofertasPrecios[0]}`);

nuevoElementoDiv.appendChild(nuevoElementoImg);

contenedorOfertas.appendChild(nuevoElementoDiv);

nuevoElementoH1.appendChild(textoElementoH1);

nuevoElementoDiv.appendChild(nuevoElementoH1);

nuevoElementoDiv.setAttribute("class", "card");

contenedorOfertas.appendChild(nuevoElementoDiv);

nuevoElementoH2.appendChild(textoElementoH2);

nuevoElementoDiv.appendChild(nuevoElementoH2);

contenedorOfertas.appendChild(nuevoElementoDiv);

nuevoElementoP.appendChild(textoElementoP);

nuevoElementoDiv.appendChild(nuevoElementoP);

contenedorOfertas.appendChild(nuevoElementoDiv);
*/