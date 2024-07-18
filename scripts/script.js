const ofertasNombres = ["Promo Cafecito", "Promo Almuerzo","Promo Merienda"]; 

const ofertasDescripcion = ["Leche en polvo + Cafe Instantaneo x2 + Azucar","Arroz + Fideos x2 + Polenta","Galletitas a Eleccion + Chocolatada x 2"];

const ofertasPrecios = [10000,6000,7000];

const ofertasImagenes = ["img1", "img2","img3"];

console.log("hola")
for (let i=0;i<ofertasNombres.length;i++){
    console.log (ofertasNombres[i]);
    console.log (ofertasDescripcion[i]);
    console.log (ofertasPrecios[i]);
    console.log (ofertasImagenes[i]);
}



let btn = document.getElementById("btn");
btn.addEventListener("click",accionar);

function accionar(){
    alert("Alert");

}
/*
let texto = document.getElementById("texto");
let contenedorOfertas = document.getElementById("ofertas");

let nuevoElemento = document.createElement("h1");

let textoElemento = document.createTextNode("soyun texto");

contenedorOfertas.innertext = "<h1>Hola vengo desde Js</h1>";

nuevoElemento.appendChild(textoElemento);

contenedorOfertas.appendChild(nuevoElemento);

texto.innertext = "Zarafaz";


*/